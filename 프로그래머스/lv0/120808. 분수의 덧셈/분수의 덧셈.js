function solution(numer1, denom1, numer2, denom2) {
    // 두 분수의 합을 구하기 위한 공식 적용
    let numerator = numer1 * denom2 + numer2 * denom1;
    let denominator = denom1 * denom2;
    
    // 최대공약수를 구하는 함수
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }
    
    // 분자와 분모의 최대공약수를 구하고, 기약 분수로 변환
    let divisor = gcd(numerator, denominator);
    numerator = numerator / divisor;
    denominator = denominator / divisor;
    
    // 결과값인 분자와 분모를 배열에 담아 반환
    return [numerator, denominator];
}