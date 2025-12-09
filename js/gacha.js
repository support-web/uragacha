// 占いガチャ データと機能

// 運勢データ
const fortuneData = {
    daikichi: {
        rank: '大吉',
        className: 'daikichi',
        stars: 5,
        probability: 5,
        messages: [
            '今日は最高の運勢です！何をしても上手くいく一日になるでしょう。積極的に行動してみて。',
            '素晴らしい出会いや幸運が訪れる予感。大きなチャンスを逃さないで！',
            '全ての運気が味方する日。夢に向かって大きな一歩を踏み出すチャンスです。',
            '奇跡的な幸運があなたを待っています。今日は思い切った行動が吉。',
        ],
    },
    chuukichi: {
        rank: '中吉',
        className: 'chuukichi',
        stars: 4,
        probability: 15,
        messages: [
            '良い運気が流れています。努力が報われる日になりそう。',
            'ポジティブな気持ちで過ごせば、さらに運気アップ！笑顔を忘れずに。',
            '小さな幸せがたくさん見つかる一日。周りに感謝の気持ちを持って。',
            '人との繋がりから良いことが起こりそう。コミュニケーションを大切に。',
        ],
    },
    kichi: {
        rank: '吉',
        className: 'kichi',
        stars: 3,
        probability: 30,
        messages: [
            '穏やかで平和な一日になりそう。いつも通り過ごすのが吉。',
            'コツコツとした努力が実を結ぶ日。焦らず着実に進んで。',
            '身近な人との時間を大切にすると良いことがありそう。',
            '新しいことを始めるのにちょうど良い日。気になることにチャレンジして。',
        ],
    },
    suekichi: {
        rank: '末吉',
        className: 'suekichi',
        stars: 2,
        probability: 25,
        messages: [
            '後から運気が上がってくる日。午後に期待して！',
            '小さなことから幸運の芽が出る予感。見逃さないで。',
            '今は準備の時期。コツコツ頑張れば、きっと良い結果に繋がります。',
            '焦らず自分のペースで進めば大丈夫。リラックスして過ごして。',
        ],
    },
    kyou: {
        rank: '凶',
        className: 'kyou',
        stars: 1,
        probability: 20,
        messages: [
            '少し慎重に過ごした方が良さそう。大きな決断は控えめに。',
            '今日は無理をしないのが吉。ゆっくり休息を取って。',
            '思い通りにいかないこともあるかも。でも明日はきっと良くなります。',
            '小さなトラブルに注意。落ち着いて対処すれば問題なし。',
        ],
    },
    daikyou: {
        rank: '大凶',
        className: 'daikyou',
        stars: 0,
        probability: 5,
        messages: [
            '今日は運気の底。でも心配しないで、明日からは上がるだけ！厄落としの日と思って。',
            '大凶が出たということは、悪い運を使い切った証拠。これから良くなる一方です！',
            '逆に考えればラッキー！大凶は滅多に出ない珍しい結果。レアを引いた記念日に。',
            'どん底を経験すれば、あとは登るだけ。今日を乗り越えれば明るい未来が待っています。',
        ],
    },
};

// 運勢の種類
const fortuneTypes = [
    '総合運',
    '恋愛運',
    '金運',
    '仕事運',
    '健康運',
    '対人運',
];

// ラッキーカラー
const luckyColors = [
    { name: '赤', color: '#ff4757' },
    { name: 'オレンジ', color: '#ff9500' },
    { name: '黄色', color: '#ffd700' },
    { name: '緑', color: '#2ed573' },
    { name: '水色', color: '#45aaf2' },
    { name: '青', color: '#3742fa' },
    { name: '紫', color: '#a855f7' },
    { name: 'ピンク', color: '#ff6bcb' },
    { name: '白', color: '#ffffff' },
    { name: 'ゴールド', color: '#ffd700' },
    { name: 'シルバー', color: '#c0c0c0' },
];

// ラッキーアイテム
const luckyItems = [
    '四つ葉のクローバー',
    'お気に入りのアクセサリー',
    '観葉植物',
    'ハンカチ',
    '文房具',
    'お守り',
    'キャンディ',
    '花',
    '本',
    '鍵',
    'コイン',
    '写真',
    'ハート型のもの',
    '星型のもの',
    'ぬいぐるみ',
    '香水・アロマ',
    '手紙・メッセージ',
    '腕時計',
    'カバン',
    '傘',
];

// ボールの色
const ballColors = [
    'linear-gradient(135deg, #ff6b6b, #c92a2a)',
    'linear-gradient(135deg, #ffd93d, #ff9500)',
    'linear-gradient(135deg, #6bcb77, #2d8f3c)',
    'linear-gradient(135deg, #4d96ff, #2563eb)',
    'linear-gradient(135deg, #ff6bcb, #c92a8a)',
    'linear-gradient(135deg, #a855f7, #7c3aed)',
    'linear-gradient(135deg, #14b8a6, #0d9488)',
    'linear-gradient(135deg, #f97316, #ea580c)',
];

// DOM要素
const gachaMachine = document.querySelector('.gacha-machine');
const gachaButton = document.getElementById('gachaButton');
const outputBall = document.getElementById('outputBall');
const resultArea = document.getElementById('resultArea');
const resultRank = document.getElementById('resultRank');
const fortuneType = document.getElementById('fortuneType');
const fortuneStars = document.getElementById('fortuneStars');
const fortuneMessage = document.getElementById('fortuneMessage');
const luckyColor = document.getElementById('luckyColor');
const luckyItem = document.getElementById('luckyItem');
const luckyNumber = document.getElementById('luckyNumber');
const retryButton = document.getElementById('retryButton');

// ユーティリティ関数
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 重み付き抽選
function weightedRandom() {
    const totalWeight = Object.values(fortuneData).reduce((sum, f) => sum + f.probability, 0);
    let random = Math.random() * totalWeight;

    for (const [key, fortune] of Object.entries(fortuneData)) {
        random -= fortune.probability;
        if (random <= 0) {
            return key;
        }
    }
    return 'kichi'; // フォールバック
}

// 星を生成
function generateStars(count) {
    const fullStar = '★';
    const emptyStar = '☆';
    return fullStar.repeat(count) + emptyStar.repeat(5 - count);
}

// ガチャを回す
function spinGacha() {
    // ボタンを無効化
    gachaButton.disabled = true;

    // 結果エリアを非表示
    resultArea.classList.remove('show', 'daikichi-effect');

    // 出力ボールをリセット
    outputBall.classList.remove('show');

    // ガチャマシンの回転アニメーション
    gachaMachine.classList.add('spinning');

    // 回転効果音的なタイミングで結果を表示
    setTimeout(() => {
        gachaMachine.classList.remove('spinning');

        // ランダムな結果を取得
        const fortuneKey = weightedRandom();
        const fortune = fortuneData[fortuneKey];

        // 出力ボールを表示
        outputBall.style.background = getRandomItem(ballColors);
        outputBall.classList.add('show');

        // 少し遅れて結果カードを表示
        setTimeout(() => {
            displayResult(fortuneKey, fortune);
            gachaButton.disabled = false;
        }, 600);
    }, 1500);
}

// 結果を表示
function displayResult(fortuneKey, fortune) {
    // 運勢ランク
    resultRank.textContent = fortune.rank;
    resultRank.className = 'result-rank ' + fortune.className;

    // 運勢の種類
    fortuneType.textContent = getRandomItem(fortuneTypes);

    // 星
    fortuneStars.textContent = generateStars(fortune.stars);

    // メッセージ
    fortuneMessage.textContent = getRandomItem(fortune.messages);

    // ラッキーカラー
    const selectedColor = getRandomItem(luckyColors);
    luckyColor.textContent = selectedColor.name;
    luckyColor.style.color = selectedColor.color;

    // ラッキーアイテム
    luckyItem.textContent = getRandomItem(luckyItems);

    // ラッキーナンバー
    luckyNumber.textContent = getRandomNumber(1, 99);

    // 結果エリアを表示
    resultArea.classList.add('show');

    // 大吉の場合は特別演出
    if (fortuneKey === 'daikichi') {
        resultArea.classList.add('daikichi-effect');
    }

    // 結果エリアまでスクロール
    setTimeout(() => {
        resultArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
}

// イベントリスナー
gachaButton.addEventListener('click', spinGacha);
retryButton.addEventListener('click', () => {
    // 上にスクロールしてからガチャを回す
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(spinGacha, 300);
});

// 初期化時のアニメーション
document.addEventListener('DOMContentLoaded', () => {
    // ボールにランダムな位置を設定
    const balls = document.querySelectorAll('.ball');
    balls.forEach((ball, index) => {
        const randomTop = 15 + Math.random() * 55;
        const randomLeft = 15 + Math.random() * 55;
        ball.style.top = randomTop + '%';
        ball.style.left = randomLeft + '%';
    });
});
