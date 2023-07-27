function isAnagram(s: string, t: string): boolean {
    const lowerCaseS = s.toLowerCase();
    const lowerCaseT = t.toLowerCase();

    const cleanS = lowerCaseS.replace(/[^a-z]/g, '');
    const cleanT = lowerCaseT.replace(/[^a-z]/g, '');

    const sortedS = cleanS.split('').sort().join('');
    const sortedT = cleanT.split('').sort().join('');

    return sortedS === sortedT;
}



console.log(isAnagram("hello","ehllo"))