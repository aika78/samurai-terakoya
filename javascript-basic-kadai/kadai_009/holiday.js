//　祝日は16個の配列
const holidays=["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];

console.log('test');
// 祝日の配列はindexを指定して出力
console.log(holidays[2]);


// for文は教材のままで連番を出力できる
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }
for (let i = 0; i < 15; i++) {
    // console.log(i);
    console.log(holidays[i]);
}


// whileの場合はfor文の応用で同じ内容を別々で定義すると連番を出力できる
let j = 1
// for文と同様にループ内にインクリメントを使用してiが+1で増えていくようにする
while (j <= 15) {
    console.log(holidays[j]);
    j++;
}