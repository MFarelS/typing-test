const text = document.querySelector('.text');
const input = document.querySelector('#input');
const hasil = document.querySelector('.footer .content');
const waktuMundurText = document.querySelector('.waktuMundurText');
const reset = document.querySelector('.reset');
const resetLeaderboard = document.querySelector('.leaderboard .body');

const kataRandom = [
    'tidak',
    'anda',
    'sekarang',
    'perlu',
    'khawatir',
    'karena',
    'anda',
    'memang',
    'sisi',
    'yang',
    'kekayaan',
    'dimana',
    'php',
    'display',
    'container',
    'obat',
    'batuk',
    'apel',
    'siapa',
    'akun',
    'diam',
    'laptop',
    'kaki',
    'gajah',
    'javascript',
    'mi',
    'ayam',
    'tomat',
    'tolol',
    'autis',
    'heran',
    'hantu',
    'apakah',
    'corona',
    'html',
    'css',
    'mobil',
    'dimanakah',
    'dia',
    'tahu',
    'tempe',
    'odading',
    'njir',
    'baca',
    'anjing',
    'shitpost',
    'barbar',
    'santuy',
    'kereta',
    'ternak',
    'lele',
    'kaos',
    'kaki',
    'baju',
    'motor',
    'halo',
    'alien',
    'batman',
    'pakaian',
    'sekolah',
    'kantor',
    'hari',
    'jika',
    'besok',
    'anda',
    'babi',
    'yasuo',
    'random',
    'tidak',
    'anda',
    'sekarang',
    'perlu',
    'khawatir',
    'karena',
    'anda',
    'memang',
    'sisi',
    'yang',
    'kekayaan',
    'dimana',
    'php',
    'display',
    'container',
    'obat',
    'batuk',
    'apel',
    'siapa',
    'akun',
    'diam',
    'laptop',
    'kaki',
    'gajah',
    'javascript',
    'mi',
    'ayam',
    'tomat',
    'tolol',
    'autis',
    'heran',
    'hantu',
    'apakah',
    'corona',
    'html',
    'css',
    'mobil',
    'dimanakah',
    'dia',
    'tahu',
    'tempe',
    'odading',
    'njir',
    'baca',
    'anjing',
    'shitpost',
    'barbar',
    'santuy',
    'kereta',
    'ternak',
    'lele',
    'kaos',
    'kaki',
    'baju',
    'motor',
    'halo',
    'alien',
    'batman',
    'pakaian',
    'sekolah',
    'kantor',
    'hari',
    'jika',
    'besok',
    'anda',
    'babi',
    'yasuo',
    'random',
    'tidak',
    'anda',
    'sekarang',
    'perlu',
    'khawatir',
    'karena',
    'anda',
    'memang',
    'sisi',
    'yang',
    'kekayaan',
    'dimana',
    'php',
    'display',
    'container',
    'obat',
    'batuk',
    'apel',
    'siapa',
    'akun',
    'diam',
    'laptop',
    'kaki',
    'gajah',
    'javascript',
    'mi',
    'ayam',
    'tomat',
    'tolol',
    'autis',
    'heran',
    'hantu',
    'apakah',
    'corona',
    'html',
    'css',
    'mobil',
    'dimanakah',
    'dia',
    'tahu',
    'tempe',
    'odading',
    'njir',
    'baca',
    'anjing',
    'shitpost',
    'barbar',
    'santuy',
    'kereta',
    'ternak',
    'lele',
    'kaos',
    'kaki',
    'baju',
    'motor',
    'halo',
    'alien',
    'batman',
    'pakaian',
    'sekolah',
    'kantor',
    'hari',
    'jika',
    'besok',
    'anda',
    'babi',
    'yasuo',
    'random',
    'tidak',
    'anda',
    'sekarang',
    'perlu',
    'khawatir',
    'karena',
    'anda',
    'memang',
    'sisi',
    'yang',
    'kekayaan',
    'dimana',
    'php',
    'display',
    'container',
    'obat',
    'batuk',
    'apel',
    'siapa',
    'akun',
    'diam',
    'laptop',
    'kaki',
    'gajah',
    'javascript',
    'mi',
    'ayam',
    'tomat',
    'tolol',
    'autis',
    'heran',
    'hantu',
    'apakah',
    'corona',
    'html',
    'css',
    'mobil',
    'dimanakah',
    'dia',
    'tahu',
    'tempe',
    'odading',
    'njir',
    'baca',
    'anjing',
    'shitpost',
    'barbar',
    'santuy',
    'kereta',
    'ternak',
    'lele',
    'kaos',
    'kaki',
    'baju',
    'motor',
    'halo',
    'alien',
    'batman',
    'pakaian',
    'sekolah',
    'kantor',
    'hari',
    'jika',
    'besok',
    'anda',
    'babi',
    'yasuo',
    'random'
];

function randIndex() {
    return Math.floor(Math.random() * kataRandom.length);
}

function kataInit() {
    const kata = kataRandom.map(item => `<span>${kataRandom[randIndex()]}</span> `).join('');
    text.innerHTML = kata;
}

kataInit();

let kataBenar = 0;
let kataSalah = 0;

let spanIndex = 0;
let spanTextIndex = 0;

let play = false;
let waktu = 60;

let kecepatanMengetik = 0;
let totalKata = 0;

input.addEventListener('mousemove', function () {
    const span = text.querySelectorAll('span');
    if (waktu != 0) {
        play = true;
        const spanEl = span[spanIndex];
        const spanText = span[spanIndex].textContent;
        let value = event.target.value;
        input.value += spanText.split('')[spanTextIndex];
        console.log(spanText.split('')[spanTextIndex]);
        spanTextIndex++;
        if (input.value.length > spanText.length) {
            spanIndex++;
            spanTextIndex = 0;
            input.value = '';
            spanEl.className = 'benar';
            totalKata += (spanText.length + 1) / 5;
            kecepatanMengetik += ((spanText.length + 1) / 5) * (60 - (60 - waktu));
        }
        else if (spanText.split('')[value.length - 1] == value.split('')[value.length - 1]) {
            spanEl.className = 'benardikit';
        }
        else if (value == '') {
            spanEl.className = '';
        }
    }
});

reset.addEventListener('click', function () {
    const span = text.querySelectorAll('span');

    play = false;
    waktu = 60;
    waktuMundurText.textContent = `01.00`;
    kataBenar = 0;
    kataSalah = 0;
    totalKata = 0;
    spanIndex = 0;
    span.forEach(item => {
        item.classList = '';
    });
    hasil.innerHTML = `<p>Kecepatan mengetik anda : <span>0</span> wpm`;
    input.value = '';
    kataInit();
});

const leaderboardItem = document.querySelector('.leaderboard .body');
window.addEventListener('load', function () {
    if (localStorage.getItem('leaderboard') == '' || localStorage.getItem('leaderboard') == '[]') {
        leaderboardItem.innerHTML = `<p>Tidak ada data</p>`;
        localStorage.setItem('leaderboard', JSON.stringify([]));
    }
})

let leaderboard = JSON.parse(localStorage.getItem('leaderboard'));
function getLeaderboard() {
    let leaderboard = JSON.parse(localStorage.getItem('leaderboard'));
    leaderboard.sort((a, b) => {
        return a - b;
    });
    leaderboard.reverse();
    const list = leaderboard.map((item, index) => {
        if (index >= 7) {
            return `<p class="last">${item}</p>`
        } else {
            return `<p>${item}</p>`
        }
    }).join('');

    leaderboardItem.innerHTML = list;
    leaderboardItem.innerHTML += `<p class="resetLeaderboard">Reset</p>`;
}
getLeaderboard();

resetLeaderboard.addEventListener('click', function () {
    if (event.target.classList == 'resetLeaderboard') {
        leaderboardItem.innerHTML = `<p>Tidak ada data</p>`;
        localStorage.setItem('leaderboard', JSON.stringify([]));
    }
})

const interval = setInterval(() => {
    if (play == true) {
        waktu--;
        if (waktu == 0) {
            play = false;
            hasil.innerHTML = `<p>Kata yang benar : <span>${kataBenar}</span> kata</p>
                               <p>Kata yang salah : <span>${kataSalah}</span> kata</p>
                               <p>Kecepatan mengetik anda : <span>${Math.floor(totalKata)}</span> wpm</p>`;
            waktuMundurText.textContent = `00.00`;
            let leaderboard = JSON.parse(localStorage.getItem('leaderboard'));
            leaderboard.push(Math.floor(totalKata));
            localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
            getLeaderboard();
        } else {
            waktuMundurText.textContent = `00.${waktu}`;
            hasil.innerHTML = `<p>Kecepatan mengetik anda : <span>${Math.floor(kecepatanMengetik)}</span> wpm`;
            kecepatanMengetik = 0;
        }
    }
}, 1000);