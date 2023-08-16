import React, { useEffect, useState } from 'react'
import './index.css'
import axiosClient from '../../api/axiosCreate'
import { BsArrowUpCircleFill, BsArrowDownCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { active } from '../../api/axiosCreate'
export const Dashboard = () => {
    const [dataMain, setDataMain] = useState([])
    const [idGame, setIdGame] = useState()
    const [isUpdate, setIsUpdate] = useState(false)
    useEffect(() => {
        axiosClient({
            method: 'GET',
            url: 'api/v1/game'
        }).then((data) => {
            console.log(data.data);
            setDataMain(data?.data[data?.data?.length - 1])
            setIdGame(data?.data[data?.data?.length - 1].id)
        })
    }, [isUpdate])

    const handleAddRound = () => {
        axiosClient({
            method: 'POST',
            url: `api/v1/game/add-rounds/${idGame}`
        }).then(() => {
            setIsUpdate(!isUpdate)
        })
    }

    const handleDownPoint = (idPlayer, idRound) => {
        const data = {
            idPlayer,
            idRound
        }
        axiosClient({
            method: 'PATCH',
            url: `api/v1/game/down-point/${idGame}`,
            data: data
        }).then(() => {
            setIsUpdate(!isUpdate)
        })
    }

    const handleUpPoint = (idPlayer, idRound) => {
        const data = {
            idPlayer,
            idRound
        }
        axiosClient({
            method: 'PATCH',
            url: `api/v1/game/up-point/${idGame}`,
            data: data
        }).then(() => {
            setIsUpdate(!isUpdate)
        })
    }

    // thiết kế database ngu nên gộp mảng chết mẹ luôn
    const createNewArrayByRounds = (arr) => {
        const roundMap = new Map();
        arr?.forEach((item) => {
            item.rounds.forEach((round) => {
                if (roundMap.has(round.idRound)) {
                    roundMap.get(round.idRound).push({
                        idPlayer: item.idPlayer,
                        name: item.name,
                        score: round.score,
                    });
                } else {
                    roundMap.set(round.idRound, [
                        {
                            idPlayer: item.idPlayer,
                            name: item.name,
                            score: round.score,
                        },
                    ]);
                }
            });
        });

        const newArray = [];

        roundMap.forEach((players, idRound) => {
            newArray.push({
                idRound,
                players,
            });
        });

        return newArray;
    };
    const newArray = createNewArrayByRounds(dataMain.players);
    // tạo 1 mảng chứa tổng điểm từng người chơi

    const calculateTotalScores = (arr) => {
        const playerScores = arr?.map((player) => {
            const { idPlayer, name, rounds } = player;

            let totalScore = 0;

            rounds.forEach((round) => {
                totalScore += round.score;
            });

            return {
                idPlayer,
                name,
                totalScore,
            };
        });

        return playerScores;
    };

    const playerScores = calculateTotalScores(dataMain.players);
    console.log(playerScores);

    // Tính tổng điểm tất cả người chơi
    const totalAllPlayerScore = playerScores?.reduce((total, item) => {
        return total + item.totalScore
    }, 0)
    console.log(active);
    return (
        <div className='wrapper-started'>
            {/* {loading !== 0 && <div className="loading-wrapper"><h2>Loading</h2></div>} */}
            <Link to='/' className='add-game red'>Back</Link>
            <div className='content-dashboard'>
                <table cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>#</th>
                            {dataMain && dataMain?.players?.map(item => {
                                return <th key={item.idPlayer}>{item.name}</th>
                            })}
                        </tr>
                        <tr>
                            <th>Sum of scores ({totalAllPlayerScore})</th>
                            {playerScores && playerScores?.map(item => {
                                return <th key={item?.idPlayer}>{item.totalScore}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {newArray && newArray.map((itemRound) => {
                            return <tr key={itemRound.idRound}>
                                <td>Round {itemRound.idRound}</td>
                                {itemRound?.players.map((itemPlay, index) => {
                                    return <td key={itemPlay?.idPlayer} >
                                        <div className='item-point'>
                                            <BsArrowUpCircleFill onClick={() => handleUpPoint(itemPlay?.idPlayer, itemRound.idRound)} className='icons' />
                                            <input readOnly type="text" value={itemPlay.score} />
                                            <BsArrowDownCircleFill onClick={() => handleDownPoint(itemPlay?.idPlayer, itemRound.idRound)} className='icons' />
                                        </div>
                                    </td>
                                })}
                            </tr>

                        })}
                    </tbody>
                </table>
                <button className='add-game' onClick={handleAddRound}>Add round</button>
            </div>
        </div>
    )
}
