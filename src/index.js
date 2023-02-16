const myProfile = {
  name: "じゃけぇ",
  age: 38
};

const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です`;
console.log("message1", message1);

/** 分割代入を使用すると */
const { name, age } = myProfile;
const message2 = `名前は${name}です。年齢は${age}です`;
console.log("message2", message2);

/**
 * # 思考の流れメモ
 *
 * 1.分割代入しようね
 * const {} =
 *
 * 2.何から取り出すか -> myProfileから
 * const {} = myProfile
 *
 * 3.myProfileの中のnameとageを取り出したいね
 * const { name, age } = myProfile
 *
 *  */

const myData = ["太郎", 12];
//  分割代入はオブジェクトだけでなく配列でも使用できる
const message3 = `名前は${myData[0]}。年齢は${myData[1]}です。`;
console.log("message3", message3);

// 配列_分割代入ver.
// 名前が決まってないので順番で受け取る
const [myName, myAge] = myData;
const message4 = `名前は${myName}。年齢は${myAge}です。`;
console.log("message4", message4);

/** デフォルト値 */
// sayHello関数からの値が空だった場合を考慮し初期値を設定する
const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
sayHello();
// sayHello('じゃけぇ');

/** スプレッド構文 */
// 配列の展開
const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);

sumFunc(arr1[0], arr1[1]);
// 上記をスプレッド構文で書くと
sumFunc(...arr1);
// 順番に処理している

// 配列をまとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log("num1", num1);
console.log("num2", num2);
console.log("arr3", arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [20, 30];

// コピー
const arr6 = [...arr4];
console.log("arr6", arr6);
// 結合
const arr7 = [...arr4, ...arr5];
console.log("arr7", arr7);

// // これじゃだめなん？（コピー）
// const arr8 = arr4;
// console.log("arr8", arr8);
// // 参照が引き継がれてしまう
// arr8[0] = 100;
// console.log("arr8_2", arr8);
// // arr4の値も変わってしまう
// console.log("arr8_2", arr4);

// スプレッド構文なら
arr6[0] = 100;
console.log("arr6", arr6);
console.log("arr4", arr4);

/**
 * mapやfilter
 */
const nameArr = ["田中", "山田", "佐藤"];
// 従来
for (let index = 0; index < nameArr.length; index++) {
  console.log(`"name_for", ${index + 1}番目は${nameArr[index]}です`);
}
// map
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log("nameArr2", nameArr2);
// 第二引数でindexを渡せる
nameArr.map((name, index) =>
  console.log(`"name_map", ${index + 1}番目は${name}です！`)
);

// filter
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log("newNumArr", newNumArr);

/**
 * 実践例 - 配列の中の特定の値のみ特定の要素を付与する
 */
const newNameArr2 = nameArr.map((name) => {
  if (name === "佐藤") return name;
  return `${name}さん`;
});
console.log("newNameArr2", newNameArr2);

/**
 * 論理演算子の本当の意味
 */
//  || は左側がfalseなら右側を返す（trueなら左側を返す）
const number1 = null;
const fee = number1 || "金額未設定です";
console.log("fee", fee);

// && は左側がtrueなら右側を返す（falseなら左側を返す）
const number2 = 100;
const fee2 = number2 && "何か設定されました";
console.log("fee2", fee2);
