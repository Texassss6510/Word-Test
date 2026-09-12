document.addEventListener('DOMContentLoaded', () => {
    // --- 在这里定义您的在线单词书结构 ---
    const wordBook = [
        {
            category: "College English",
            lists: [
                { name: "Book 1 - Unit 1", path: "College English/Book 1/B1U1.json" },
                { name: "Book 2 - Unit 1", path: "College English/Book 2/B2U1.json" },
                { name: "Book 2 - Unit 2", path: "College English/Book 2/B2U2.json" },
                { name: "Book 2 - Unit 3", path: "College English/Book 2/B2U3.json" },
                { name: "Book 2 - Unit 4", path: "College English/Book 2/B2U4.json" },
                { name: "Book 2 - Unit 5", path: "College English/Book 2/B2U5.json" },
                { name: "Book 2 - Unit 6", path: "College English/Book 2/B2U6.json" },
                { name: "Book 2 - Unit 7", path: "College English/Book 2/B2U7.json" },
                { name: "Book 2 - Unit 8", path: "College English/Book 2/B2U8.json" },
                { name: "Book 3 - Unit 1", path: "College English/Book 3/B3U1.json" },
                { name: "Book 3 - Unit 2", path: "College English/Book 3/B3U2.json" },
                { name: "Book 3 - Unit 3", path: "College English/Book 3/B3U3.json" },
                { name: "Book 3 - Unit 4", path: "College English/Book 3/B3U4.json" },
                { name: "Book 3 - Unit 5", path: "College English/Book 3/B3U5.json" },
                { name: "Book 3 - Unit 6", path: "College English/Book 3/B3U6.json" },
                { name: "Book 3 - Unit 7", path: "College English/Book 3/B3U7.json" },
                { name: "Book 3 - Unit 8", path: "College English/Book 3/B3U8.json" }
            ]
        },
        {
            category: "CET 4",
            lists: [
                { name: "核心词汇 - list1", path: "CET 4/list1.json" }
            ]
        },
        {
            category: "Stardew Valley",
            lists: [
                { name: "Group 1", path: "Stardew Valley/星露谷单词1.json" },
                { name: "Group 2", path: "Stardew Valley/星露谷单词2.json" },
                { name: "Group 3", path: "Stardew Valley/星露谷单词3.json" },
                { name: "Group 4", path: "Stardew Valley/星露谷单词4.json" }
            ]
        },
        {
            category: "My Little Pony",
            lists: [
                { name: "S1E01", path: "My Little Pony/Season 1 Word/Ep01.json" }
            ]
        },
        {
            category: "NMET Vocabulary",
            lists: [
                { name: "Day 01", path: "NMET Vocabulary/Day 01.json" },
                { name: "Day 02", path: "NMET Vocabulary/Day 02.json" },
                { name: "Day 03", path: "NMET Vocabulary/Day 03.json" },
                { name: "Day 04", path: "NMET Vocabulary/Day 04.json" },
                { name: "Day 05", path: "NMET Vocabulary/Day 05.json" },
                { name: "Day 06", path: "NMET Vocabulary/Day 06.json" },
                { name: "Day 07", path: "NMET Vocabulary/Day 07.json" },
                { name: "Day 08", path: "NMET Vocabulary/Day 08.json" },
                { name: "Day 09", path: "NMET Vocabulary/Day 09.json" },
                { name: "Day 10", path: "NMET Vocabulary/Day 10.json" },
                { name: "Day 11", path: "NMET Vocabulary/Day 11.json" },
                { name: "Day 12", path: "NMET Vocabulary/Day 12.json" },
                { name: "Day 13", path: "NMET Vocabulary/Day 13.json" },
                { name: "Day 14", path: "NMET Vocabulary/Day 14.json" },
                { name: "Day 15", path: "NMET Vocabulary/Day 15.json" },
                { name: "Day 16", path: "NMET Vocabulary/Day 16.json" },
                { name: "Day 17", path: "NMET Vocabulary/Day 17.json" },
                { name: "Day 18", path: "NMET Vocabulary/Day 18.json" },
                { name: "Day 19", path: "NMET Vocabulary/Day 19.json" },
                { name: "Day 20", path: "NMET Vocabulary/Day 20.json" },
                { name: "Day 21", path: "NMET Vocabulary/Day 21.json" },
                { name: "Day 22", path: "NMET Vocabulary/Day 22.json" },
                { name: "Day 23", path: "NMET Vocabulary/Day 23.json" },
                { name: "Day 24", path: "NMET Vocabulary/Day 24.json" },
                { name: "Day 25", path: "NMET Vocabulary/Day 25.json" },
                { name: "Day 26", path: "NMET Vocabulary/Day 26.json" },
                { name: "Day 27", path: "NMET Vocabulary/Day 27.json" },
                { name: "Day 28", path: "NMET Vocabulary/Day 28.json" },
                { name: "Day 29", path: "NMET Vocabulary/Day 29.json" },
                { name: "Day 30", path: "NMET Vocabulary/Day 30.json" },
                { name: "Day 31", path: "NMET Vocabulary/Day 31.json" },
                { name: "Day 32", path: "NMET Vocabulary/Day 32.json" },
                { name: "Day 33", path: "NMET Vocabulary/Day 33.json" },
                { name: "Day 34", path: "NMET Vocabulary/Day 34.json" },
                { name: "Day 35", path: "NMET Vocabulary/Day 35.json" },
                { name: "Day 36", path: "NMET Vocabulary/Day 36.json" },
                { name: "Day 37", path: "NMET Vocabulary/Day 37.json" },
                { name: "Day 38", path: "NMET Vocabulary/Day 38.json" },
                { name: "Day 39", path: "NMET Vocabulary/Day 39.json" },
                { name: "Day 40", path: "NMET Vocabulary/Day 40.json" },
                { name: "Day 41", path: "NMET Vocabulary/Day 41.json" },
                { name: "Day 42", path: "NMET Vocabulary/Day 42.json" }
            ]
        }
    ];

    // --- DOM Elements ---
    const categorySelector = document.getElementById('categorySelector');
    const unitSelector = document.getElementById('unitSelector');
    const loadWordsButton = document.getElementById('loadWordsButton');
    const backToSelectionButton = document.getElementById('backToSelectionButton');
    const goBackButton = document.getElementById('goBackButton');
    const startSpellingButton = document.getElementById('startSpellingButton');
    const startDictationButton = document.getElementById('startDictationButton');
    const playAudioButton = document.getElementById('playAudioButton');
    const userAnswerInput = document.getElementById('userAnswer');
    const exportButton = document.getElementById('exportButton');
    const restartButton = document.getElementById('restartButton');
    const exitReviewButton = document.getElementById('exitReviewButton');
    const togglePhoneticButton = document.getElementById('togglePhoneticButton');
    const showAnswerButton = document.getElementById('showAnswerButton');
    const reviewMistakesButton = document.getElementById('reviewMistakesButton');
    const currentChineseHint = document.getElementById('currentChineseHint');
    const phoneticDisplay = document.getElementById('phonetic');
    const resultFeedback = document.getElementById('result');
    const wordStage = document.getElementById('wordStage');
    const totalWordsCountSpan = document.getElementById('totalWordsCount');
    const reviewedCountSpan = document.getElementById('reviewedCount');
    const incorrectCountSpan = document.getElementById('incorrectCount');
    const incorrectWordsTableBody = document.querySelector('#incorrectWordsTable tbody');
    const incorrectWordsContainer = document.getElementById('incorrectWordsContainer');
    const fileLoadedInfo = document.getElementById('fileLoadedInfo');
    const progressBar = document.getElementById('progressBar');
    const progressBarFill = document.getElementById('progressBarFill');

    // --- Views ---
    const wordSelectionView = document.getElementById('wordSelectionView');
    const readyToStartView = document.getElementById('readyToStartView');
    const reviewView = document.getElementById('reviewView');
    const reviewCompleteView = document.getElementById('reviewCompleteView');
    const views = [wordSelectionView, readyToStartView, reviewView, reviewCompleteView];

    // --- Effects ---
    const confettiCanvas = document.getElementById('confettiCanvas');
    const completionTitle = document.getElementById('completionTitle');
    const completionMessage = document.getElementById('completionMessage');

    // --- Application State ---
    let wordList = [];
    let currentWordIndex = 0;
    let incorrectWords = [];
    let appState = 'wordSelection';
    let reviewMode = 'spelling';
    let currentListPath = null;
    let currentUnitName = "";

    // --- 动效工具 ---
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const EASE_OUT = 'cubic-bezier(0.23, 1, 0.32, 1)';

    /**
     * 元素入场：极短的淡入 + 微位移。
     * 单词每几十秒才换一次，所以刻意做得几乎察觉不到——目的是消除“瞬移感”，
     * 而不是让人注意到动画本身。
     * 同一个元素上先取消上一次：连续快速换词时不会两条动画叠在一起。
     */
    const activeEntrances = new WeakMap();

    function animateIn(element, { distance = 10, duration = 260 } = {}) {
        if (!element || reducedMotionQuery.matches || typeof element.animate !== 'function') return;
        const previous = activeEntrances.get(element);
        if (previous) previous.cancel();
        activeEntrances.set(element, element.animate(
            [
                { opacity: 0, transform: `translateY(${distance}px)` },
                { opacity: 1, transform: 'translateY(0)' }
            ],
            { duration, easing: EASE_OUT }
        ));
    }

    /**
     * 答错的横向抖动：振幅逐次衰减（弹簧欠阻尼的观感）。
     * 用 WAAPI 而不是 CSS @keyframes —— 新的一次会先把旧的取消掉，
     * 所以连续答错不会「撞墙」（keyframes 要么从零重启，要么因为 class 已存在而根本不重播）。
     */
    const SHAKE_KEYFRAMES = [
        { transform: 'translateX(0)' },
        { transform: 'translateX(-7px)' },
        { transform: 'translateX(5.5px)' },
        { transform: 'translateX(-3.5px)' },
        { transform: 'translateX(2px)' },
        { transform: 'translateX(-0.8px)' },
        { transform: 'translateX(0)' }
    ];

    function shakeAnswerInput() {
        if (reducedMotionQuery.matches || typeof userAnswerInput.animate !== 'function') return;
        userAnswerInput.getAnimations().forEach(animation => animation.cancel());
        userAnswerInput.animate(SHAKE_KEYFRAMES, { duration: 420, easing: 'ease-out' });
    }

    // --- Utility Functions ---
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    // --- 发音 ---------------------------------------------------------------
    // 用有道词典的发音接口。它是「直接拼 URL」的形式：
    //   https://dict.youdao.com/dictvoice?audio=<单词>&type=2   （1 = 英音，2 = 美音）
    // 相比之前用的 dictionaryapi.dev 有三个好处：
    //   1. 不必先 fetch 查一次拿地址，URL 直接就能算出来；
    //   2. 因此也不需要 CORS——<audio> 播放跨域音频不要求 CORS 头，
    //      只有 fetch 读数据才需要，而现在一次 fetch 都不发；
    //   3. 任何单词都有音（有录音用录音，没有就合成），不会像之前那样大片查不到。
    // 浏览器自带 TTS 只作断网兜底——这台机器上英文只有 Microsoft Zira Desktop
    // （Vista 时代的拼接式语音），单独用它读不准。
    //
    // 【关于「为什么不用有道官方 API」——已调研，结论是这里用不了】
    // ai.youdao.com 确实提供官方 TTS（openapi.youdao.com/ttsapi）和词典 API，
    // 但两者的签名都是 sha256(应用ID + input + salt + curtime + 应用密钥)，
    // 「应用密钥」必须参与计算。纯前端没有后端，密钥就只能写进这个文件，
    // 而本站在公开的 GitHub Pages 上——等于把密钥交给所有人，
    // 后果是被刷爆配额、被以你的身份调用、产生你的账单。
    // 另外官方渠道要付费（仅赠 50 元体验金），词典 API 还需电话申请开通，
    // 且条款明文禁止缓存返回数据。
    // 所以继续用网页版词典自己在用的这个免密接口；
    // 万一哪天它变更，下面的 TTS 兜底会接管，不会白屏也不会静音。
    const YOUDAO_VOICE = 'https://dict.youdao.com/dictvoice?audio=';
    const fallbackAudio = new Audio();
    let speechToken = 0;

    // ── TTS 兜底 ─────────────────────────────────────────────────────────
    // 即使只能用 TTS，也显式挑一个尽可能好的英文语音，而不是听任浏览器默认。
    let englishVoices = [];

    function refreshVoices() {
        if (!('speechSynthesis' in window)) return;
        englishVoices = window.speechSynthesis.getVoices()
            .filter(v => /^en([-_]|$)/i.test(v.lang));
    }

    if ('speechSynthesis' in window) {
        refreshVoices();
        // Chrome 首次 getVoices() 会返回空数组，必须等这个事件
        window.speechSynthesis.addEventListener('voiceschanged', refreshVoices);
    }

    function scoreVoice(voice) {
        const name = voice.name.toLowerCase();
        let score = 0;
        // 神经 / 自然语音最好
        if (/natural|neural|premium|enhanced/.test(name)) score += 100;
        if (/online/.test(name)) score += 30;
        // "Desktop" 是 Vista 那批拼接式语音，最差
        if (/desktop/.test(name)) score -= 60;
        if (/^en[-_]us/i.test(voice.lang)) score += 20;
        else if (/^en[-_]gb/i.test(voice.lang)) score += 10;
        if (voice.localService === false) score += 5;
        return score;
    }

    function pickEnglishVoice() {
        if (englishVoices.length === 0) refreshVoices();
        if (englishVoices.length === 0) return null;
        return englishVoices.slice().sort((a, b) => scoreVoice(b) - scoreVoice(a))[0];
    }

    function stopSpeaking() {
        speechToken++;
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
        if (!fallbackAudio.paused) {
            fallbackAudio.pause();
            fallbackAudio.currentTime = 0;
        }
    }

    function speakWithTTS(text) {
        if (!('speechSynthesis' in window)) return;
        const token = ++speechToken;
        const utterance = new SpeechSynthesisUtterance(text);
        const voice = pickEnglishVoice();
        if (voice) utterance.voice = voice;
        utterance.lang = voice ? voice.lang : 'en-US';
        utterance.rate = 0.9;
        // Chrome 里 cancel() 之后同一 tick 再 speak() 有概率被吞掉，
        // 推到下一个任务更稳；token 用来丢弃期间被取代的那一次。
        setTimeout(() => {
            if (token !== speechToken) return;
            window.speechSynthesis.speak(utterance);
        }, 0);
    }

    /** 朗读一个单词：有道的音优先，加载失败（断网 / 被拦）才退回浏览器 TTS。 */
    function speak(text) {
        stopSpeaking();
        fallbackAudio.src = YOUDAO_VOICE + encodeURIComponent(text) + '&type=2';
        fallbackAudio.play().catch(() => speakWithTTS(text));
    }

    // --- 音效（Web Audio 合成，不再依赖缺失的 ./sounds/*.mp3） ---
    let audioCtx = null;

    function getAudioContext() {
        if (audioCtx) return audioCtx;
        const Ctor = window.AudioContext || window.webkitAudioContext;
        if (!Ctor) return null;
        try {
            audioCtx = new Ctor();
        } catch (err) {
            console.warn('Web Audio 不可用，已跳过音效:', err);
            return null;
        }
        return audioCtx;
    }

    function playTone({ freq, duration, type = 'sine', gain = 0.1, delay = 0, sweepTo = null }) {
        const ctx = getAudioContext();
        if (!ctx) return;
        // 浏览器要求音频上下文在用户手势后才能启动
        if (ctx.state === 'suspended') ctx.resume().catch(() => {});

        const startAt = ctx.currentTime + delay;
        const osc = ctx.createOscillator();
        const amp = ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, startAt);
        if (sweepTo) osc.frequency.exponentialRampToValueAtTime(sweepTo, startAt + duration);

        // 首尾都收到接近 0，避免爆音
        amp.gain.setValueAtTime(0.0001, startAt);
        amp.gain.exponentialRampToValueAtTime(gain, startAt + 0.012);
        amp.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);

        osc.connect(amp).connect(ctx.destination);
        osc.start(startAt);
        osc.stop(startAt + duration + 0.02);
    }

    function playCorrectSound() {
        // 清脆的两音上行
        playTone({ freq: 880, duration: 0.12, gain: 0.11 });
        playTone({ freq: 1318.5, duration: 0.18, gain: 0.09, delay: 0.085 });
    }

    function playIncorrectSound() {
        // 柔和的下行提示，不刺耳
        playTone({ freq: 330, duration: 0.22, type: 'triangle', gain: 0.09, sweepTo: 196 });
    }

    // --- 撒花效果 ---
    const confettiCtx = confettiCanvas.getContext('2d');
    const CONFETTI_COLORS = ['#007aff', '#5ac8fa', '#34d399', '#fbbf24', '#f472b6', '#a78bfa'];
    let confettiParticles = [];
    let confettiFrameId = null;

    function resizeConfettiCanvas() {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        confettiCanvas.width = Math.floor(window.innerWidth * dpr);
        confettiCanvas.height = Math.floor(window.innerHeight * dpr);
        // 用 CSS 像素坐标绘制
        confettiCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function launchConfetti(amount = 160) {
        // 用户要求减少动态效果时不放撒花
        if (reducedMotionQuery.matches) return;
        resizeConfettiCanvas();

        const width = window.innerWidth;
        for (let i = 0; i < amount; i++) {
            confettiParticles.push({
                x: Math.random() * width,
                y: -20 - Math.random() * 140,
                vx: (Math.random() - 0.5) * 2.4,
                vy: 2.2 + Math.random() * 2.8,
                size: 5 + Math.random() * 7,
                rotation: Math.random() * Math.PI * 2,
                spin: (Math.random() - 0.5) * 0.24,
                color: CONFETTI_COLORS[(Math.random() * CONFETTI_COLORS.length) | 0],
                shape: Math.random() < 0.28 ? 'circle' : 'rect'
            });
        }

        if (confettiFrameId === null) confettiFrameId = requestAnimationFrame(stepConfetti);
    }

    function stepConfetti() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        confettiCtx.clearRect(0, 0, width, height);

        for (let i = confettiParticles.length - 1; i >= 0; i--) {
            const p = confettiParticles[i];
            p.vy += 0.045;   // 重力
            p.vx *= 0.995;   // 空气阻力
            p.x += p.vx;
            p.y += p.vy;
            p.rotation += p.spin;

            if (p.y > height + 40) {
                confettiParticles.splice(i, 1);
                continue;
            }

            confettiCtx.save();
            confettiCtx.translate(p.x, p.y);
            confettiCtx.rotate(p.rotation);
            confettiCtx.globalAlpha = 0.9;
            confettiCtx.fillStyle = p.color;
            if (p.shape === 'circle') {
                confettiCtx.beginPath();
                confettiCtx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
                confettiCtx.fill();
            } else {
                confettiCtx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
            }
            confettiCtx.restore();
        }

        if (confettiParticles.length > 0) {
            confettiFrameId = requestAnimationFrame(stepConfetti);
        } else {
            confettiCtx.clearRect(0, 0, width, height);
            confettiFrameId = null;
            // 撒完就把画布尺寸归零，把整块显存还回去
            confettiCanvas.width = 0;
            confettiCanvas.height = 0;
        }
    }

    // --- App View Management ---
    function updateAppView(newState) {
        appState = newState;
        views.forEach(view => view.classList.remove('active-view'));
        const targetView = document.getElementById(newState + 'View');
        if (targetView) {
            targetView.classList.add('active-view');
        }
    }

    function hideFeedback() {
        resultFeedback.classList.remove('is-visible');
    }

    // --- 答对之后的推进节奏 ---
    // 不用「锁住界面等 1 秒」的做法：这段时间里用户一动手就立刻推进，
    // 并且保留他已经敲进去的字符（Apple：the thought and the gesture happen in parallel）。
    // 答对之后停留多久再进下一个词。
    // 0.85 秒：够看清「正确」这个反馈，又不打断连续作答的节奏。
    // 而且一动手（打字或按 Enter）就立刻跳过，着急时完全不用等。
    const ADVANCE_DELAY = 850;
    let advanceTimerId = null;
    // 已经作答、正在等待切换的那份答案。
    // 它【留在输入框里】不立刻清掉，好让用户还能看见自己写的是什么，
    // 直到考察的单词一起切换过去。
    let committedAnswer = '';
    // 是否已经点过「看答案」。为 true 时输入框变成纯展示：
    // 答案填在里面等用户看够，按 Enter 才走，绝不自动切换。
    let answerRevealed = false;

    function isAdvancing() {
        return advanceTimerId !== null;
    }

    function scheduleAdvance(delay = ADVANCE_DELAY) {
        clearAdvance();
        advanceTimerId = setTimeout(() => {
            advanceTimerId = null;
            showNextWord();
        }, delay);
    }

    /**
     * 立刻推进到下一个词。
     * preserveInput 只在「用户已经开始敲下一个词」时为 true——
     * 那时输入框里已经是新答案的开头，不能清掉。
     * 按 Enter 跳过时走默认的 false：那份旧答案必须清掉，
     * 否则会被带进下一个单词里。
     */
    function advanceNow({ preserveInput = false } = {}) {
        if (advanceTimerId === null) return;
        clearAdvance();
        showNextWord({ preserveInput });
    }

    function clearAdvance() {
        if (advanceTimerId !== null) {
            clearTimeout(advanceTimerId);
            advanceTimerId = null;
        }
    }

    function resetProgress() {
        clearAdvance();
        currentWordIndex = 0;
        incorrectWords = [];
        hideFeedback();
        updateProgressDisplay();
    }

    function updateProgressDisplay() {
        const total = wordList ? wordList.length : 0;
        const reviewed = Math.max(0, currentWordIndex);

        totalWordsCountSpan.textContent = total;
        reviewedCountSpan.textContent = reviewed;
        incorrectCountSpan.textContent = incorrectWords.length;

        const ratio = total > 0 ? reviewed / total : 0;
        // scaleX 走合成层，比改 width 便宜
        progressBarFill.style.transform = `scaleX(${ratio})`;
        progressBar.setAttribute('aria-valuenow', Math.round(ratio * 100));
        progressBar.classList.toggle('is-complete', total > 0 && reviewed >= total);
    }

    // --- Core Logic ---
    function populateCategorySelector() {
        wordBook.forEach((group, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = group.category;
            categorySelector.appendChild(option);
        });
    }

    function populateUnitSelector(categoryIndex) {
        const selectedGroup = wordBook[categoryIndex];
        unitSelector.innerHTML = ''; // 清空旧的单元选项

        // **根据您的要求，不添加“请选择”的默认项**
        selectedGroup.lists.forEach(list => {
            const option = document.createElement('option');
            option.value = list.path;
            option.textContent = list.name;
            unitSelector.appendChild(option);
        });
    }

    async function loadWordsFromServer(path) {
        fileLoadedInfo.textContent = 'Loading words';
        try {
            const response = await fetch(path);
            // 404 表示「这个单元还没有录入」（NMET Day 08–42 目前是占位），
            // 不该当成网络故障报给用户。
            if (response.status === 404) {
                const notReady = new Error('not ready');
                notReady.code = 'NOT_READY';
                throw notReady;
            }
            if (!response.ok) throw new Error(`Network error: ${response.statusText}`);
            const fileData = await response.json();

            // 简单的文件格式验证
            const word = fileData[0];
            if (!word || typeof word.english !== 'string' || !Array.isArray(word.pos) || typeof word.phonetic !== 'string') {
                 throw new Error("Invalid word list format");
            }

            wordList = fileData;
            fileLoadedInfo.innerHTML = `Loaded: <strong style="color:var(--accent-ink)">${currentUnitName}</strong><br>${wordList.length} words`;
            resetProgress();
            updateAppView('readyToStart');

        } catch (error) {
            console.error("加载单词文件失败:", error);
            fileLoadedInfo.textContent = error.code === 'NOT_READY'
                ? 'This unit is not available yet — try another one'
                : `Failed to load: ${error.message}`;
        }
    }

    function startCurrentReview() {
        if (!currentListPath) return;
        clearAdvance();
        shuffleArray(wordList); // Re-shuffle before starting
        resetProgress();
        updateAppView('review');
        showNextWord();
    }

    function startReview(mode) {
        reviewMode = mode;
        startCurrentReview();
    }

    function showNextWord({ preserveInput = false } = {}) {
        // preserveInput：用户已经抢在计时器前面开始敲下一个单词了，
        // 那就别把他刚敲的字符抹掉。
        if (!preserveInput) userAnswerInput.value = '';
        // 切换完成，已提交的答案不再需要单独记录
        committedAnswer = '';
        // 新词开始，退出「已揭晓」状态，「看答案」重新可用
        answerRevealed = false;
        showAnswerButton.disabled = false;
        userAnswerInput.classList.remove('input-error-shake');
        hideFeedback();

        if (currentWordIndex < wordList.length) {
            const word = wordList[currentWordIndex];

            if (reviewMode === 'dictation') {
                // 听写模式原本是整张空白卡片——这里给一个不泄题的视觉锚点。
                // 这个标签在整个听写过程中是静止的，所以只在还没写过时写一次，
                // 不必每换一个词就重建一次 DOM。
                if (!currentChineseHint.querySelector('.dictation-hint')) {
                    currentChineseHint.innerHTML =
                        '<span class="dictation-hint"><svg class="icon" aria-hidden="true"><use href="#i-headphones"/></svg>Dictation Mode</span>';
                }
                speak(word.english);
            } else {
                currentChineseHint.innerHTML = word.pos
                    .map(p => `<div class="meaning-line"><span class="pos-abbr">${p.abbreviation}</span><span class="pos-meaning">${p.meaning}</span></div>`)
                    .join('');
            }

            // 【只收起，不写文字】——新的音标等用户下次展开时再写（见 togglePhoneticVisibility）。
            // 这里如果先写再收，淡出的那 240ms 里显示的是【下一个词】的音标：
            // 既和当前单词错位，又提前把下一个词剧透了。截图外的这个 bug 就是这么来的。
            phoneticDisplay.classList.remove('is-visible');
            togglePhoneticButton.setAttribute('aria-pressed', 'false');

            updateProgressDisplay();
            // 听写模式换词时画面上其实没有任何变化：上方标签是静态的、音标默认收起，
            // 所以不需要入场动画。之前无条件动整个舞台，才会把那个静态标签也带着闪。
            if (reviewMode !== 'dictation') animateIn(wordStage);
            userAnswerInput.focus();
        } else {
            updateAppView('reviewComplete');
            displayIncorrectWords();
        }
    }

    function handleKeyPress(event) {
        if (event.key === "Enter" && appState === 'review') {
            event.preventDefault();
            // 看过答案：Enter 只是「继续」，不再判定对错，也不播正确音效
            if (answerRevealed) {
                answerRevealed = false;
                currentWordIndex++;
                updateProgressDisplay();
                showNextWord();
                return;
            }
            // 正在等下一个单词时，Enter 直接推进，不用干等。
            // 这里刻意【不】保留输入框内容——那里面是已经作答过的旧答案。
            if (isAdvancing()) { advanceNow(); return; }
            if (userAnswerInput.value.trim() !== '') checkAnswer();
        } else if (event.shiftKey && (event.code === "Space" || event.key === " ")) {
            event.preventDefault();
            togglePhoneticVisibility();
        }
    }

    function checkAnswer() {
        // 上一次答对的过渡还在走时，忽略重复提交。
        // 否则 currentWordIndex 已经自增，这一下会把下一个单词误判成错误。
        if (isAdvancing()) return;

        const userAnswer = userAnswerInput.value.trim();
        const currentWord = wordList[currentWordIndex];

        if (userAnswer.toLowerCase() === currentWord.english.toLowerCase()) {
            playCorrectSound();
            resultFeedback.textContent = `✨ Correct!`;
            resultFeedback.className = 'message-feedback correct-message is-visible';
            currentWordIndex++;
            updateProgressDisplay();
            // 【不】清空输入框——让答案留在屏幕上，和考察的单词一起切换。
            // 代价是等待期间用户如果直接开打，字符会接在这份答案后面，
            // 所以下面的 input 监听里会把旧答案那段摘掉（见事件绑定处）。
            committedAnswer = userAnswerInput.value;
            scheduleAdvance();
        } else {
            playIncorrectSound();
            resultFeedback.textContent = `🤔 Incorrect — the answer is ${currentWord.english}`;
            resultFeedback.className = 'message-feedback error-message is-visible';

            if (!incorrectWords.some(item => item.english === currentWord.english)) {
                incorrectWords.push({ ...currentWord, userInput: userAnswer });
                updateProgressDisplay();
            }

            userAnswerInput.classList.add('input-error-shake');
            shakeAnswerInput();
        }
    }

    /**
     * 「看答案 / 跳过」。
     * 不会拼的词总得有条退路——听写模式下尤其如此，硬猜没有任何学习价值。
     * 因为它确实要记进错题，所以沿用答错那条路径，只是改由用户主动触发。
     */
    function revealAnswer() {
        if (appState !== 'review' || isAdvancing() || answerRevealed) return;
        if (currentWordIndex >= wordList.length) return;

        const word = wordList[currentWordIndex];
        const typed = userAnswerInput.value.trim();

        if (!incorrectWords.some(item => item.english === word.english)) {
            incorrectWords.push({ ...word, userInput: typed });
            updateProgressDisplay();
        }

        // 答案直接填进输入框，让用户看个够。
        // 这里【不】排计时器——换不换词交给用户按 Enter 决定。
        // 之前用自动推进，答案刚出现就被换走，等于没看见。
        userAnswerInput.value = word.english;
        userAnswerInput.classList.remove('input-error-shake');
        answerRevealed = true;
        showAnswerButton.disabled = true;

        resultFeedback.textContent = '💡 Press Enter for the next word';
        resultFeedback.className = 'message-feedback info-message is-visible';

        userAnswerInput.focus();
    }

    /**
     * 「只复习错题」：把错题还原成普通词条，重新开一轮。
     * 一个单元错了十几个词，没必要整本重来。
     */
    function reviewMistakesOnly() {
        if (incorrectWords.length === 0) return;
        wordList = incorrectWords.map(w => ({
            english: w.english,
            pos: w.pos,
            phonetic: w.phonetic
        }));
        incorrectWords = [];
        startCurrentReview();   // 内部会重新洗牌并 resetProgress
    }

    function togglePhoneticVisibility() {
        if (appState !== 'review') return;
        const willShow = !phoneticDisplay.classList.contains('is-visible');

        // 【在展开的这一刻才写入音标】，而不是换词时就写好。
        // 换词时写的话，上一个词的音标在做淡出动画的过程中，
        // 里面已经换成了下一个词的内容——既错位，又提前剧透。
        if (willShow && currentWordIndex < wordList.length) {
            phoneticDisplay.textContent = wordList[currentWordIndex].phonetic;
        }

        phoneticDisplay.classList.toggle('is-visible', willShow);
        // 按钮和 Shift+空格 共用同一个状态，这里把 aria-pressed 同步上
        togglePhoneticButton.setAttribute('aria-pressed', String(willShow));
    }

    function displayIncorrectWords() {
        incorrectWordsTableBody.innerHTML = '';

        if (incorrectWords.length === 0) {
            completionTitle.textContent = '🎉 Perfect! All correct!';
            completionMessage.textContent = 'Flawless run — keep it up!';
            // 用 class 而不是内联 display：这样才能走 CSS 过渡，出现时是淡入而非“啪”地弹出
            incorrectWordsContainer.classList.add('is-hidden');
            reviewMistakesButton.style.display = 'none';
            // 全对才撒花——让满分这一次显得特别
            launchConfetti(180);
            return;
        }

        completionTitle.textContent = '👍 Review Complete!';
        completionMessage.textContent = 'Nice work — here are the words to revisit';
        incorrectWordsContainer.classList.remove('is-hidden');
        reviewMistakesButton.style.display = 'inline-flex';

        incorrectWords.forEach((word, index) => {
            const row = incorrectWordsTableBody.insertRow();
            // 逐行入场的错开延迟，配套 CSS 里的 rowIn
            row.style.setProperty('--i', String(index));
            row.insertCell().textContent = word.english;

            const posCell = row.insertCell();
            posCell.innerHTML = word.pos
                .map(entry => `<div class="meaning-line"><span class="pos-abbr">${entry.abbreviation}</span><span class="pos-meaning">${entry.meaning}</span></div>`)
                .join("");

            row.insertCell().textContent = word.phonetic;
            row.insertCell().textContent = word.userInput;
        });
    }

    function exportIncorrectWordsList() {
        if (incorrectWords.length === 0) return;
        let content = "Word,Phonetic,Meaning,Your Answer\n"; // CSV表头

        incorrectWords.forEach(w => {
            // 将词性释义拼接成一个字符串
            const meanings = w.pos.map(p => `${p.abbreviation}${p.meaning}`).join('; ');
            // 添加双引号防止释义里含有英文逗号破坏 CSV 格式
            content += `${w.english},${w.phonetic},"${meanings}",${w.userInput}\n`;
        });

        // 加上 \ufeff 防止 Excel 打开时中文乱码
        const blob = new Blob(["\ufeff" + content], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `mistakes_${currentUnitName || 'export'}.csv`; // 文件名带上单元名
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
    }

    // --- Event Handlers ---
    categorySelector.addEventListener('change', () => {
        const selectedIndex = categorySelector.value;
        if (selectedIndex) { // 如果选择的不是 "-- 请选择 --"
            populateUnitSelector(selectedIndex);
            unitSelector.classList.remove('is-hidden');
            loadWordsButton.disabled = false; // 启用“开始学习”按钮
        } else {
            unitSelector.classList.add('is-hidden'); // 隐藏单元菜单
            loadWordsButton.disabled = true; // 禁用按钮
        }
    });

    loadWordsButton.addEventListener('click', () => {
        const path = unitSelector.value;
        if (!path) return;
        currentListPath = path; // 保存当前学习列表的路径
        currentUnitName = unitSelector.options[unitSelector.selectedIndex].text;
        updateAppView('readyToStart');
        fileLoadedInfo.textContent = 'Preparing';
        loadWordsFromServer(currentListPath);
    });

    startSpellingButton.addEventListener('click', () => startReview('spelling'));
    startDictationButton.addEventListener('click', () => startReview('dictation'));

    // 等下一个单词的这段时间里，用户一动手就立刻推进，不用干等。
    // 但输入框里还留着上一题的答案，所以要把那一段摘掉，
    // 只保留他刚敲的字符——那才是下一个答案的开头。
    // 把摘除放在 input 事件里而不是 keydown：粘贴和输入法也一并覆盖，
    // 而且 input 在绘制之前同步触发，画面不会闪出中间状态。
    userAnswerInput.addEventListener('input', () => {
        userAnswerInput.classList.remove('input-error-shake');
        // 答案已揭晓时输入框只是展示用：把它锁回答案，打字看不出变化。
        // 不用 readonly 是因为 iOS 对 readonly 输入框可能不弹键盘，
        // 而 Enter 恰恰要靠那个键盘。
        if (answerRevealed) {
            userAnswerInput.value = wordList[currentWordIndex].english;
            return;
        }
        if (!isAdvancing()) return;
        if (committedAnswer && userAnswerInput.value.startsWith(committedAnswer)) {
            userAnswerInput.value = userAnswerInput.value.slice(committedAnswer.length);
        }
        committedAnswer = '';
        advanceNow({ preserveInput: true });
    });

    userAnswerInput.addEventListener('keydown', handleKeyPress);
    exportButton.addEventListener('click', exportIncorrectWordsList);

    restartButton.addEventListener('click', startCurrentReview);
    backToSelectionButton.addEventListener('click', () => updateAppView('wordSelection'));
    goBackButton.addEventListener('click', () => updateAppView('wordSelection'));

    // 复习中途的出口：随时能回到主菜单，不把人困在流程里
    exitReviewButton.addEventListener('click', () => {
        clearAdvance();
        updateAppView('wordSelection');
    });

    playAudioButton.addEventListener('click', () => {
        if (appState === 'review' && currentWordIndex < wordList.length) {
            speak(wordList[currentWordIndex].english);
            userAnswerInput.focus();
        }
    });

    // 音标：给触屏设备一条能走的路（Shift+空格 在 iPad 上按不出来）
    togglePhoneticButton.addEventListener('click', () => {
        togglePhoneticVisibility();
        userAnswerInput.focus();
    });

    // 看答案后不抢焦点：用户这一刻是在读答案，不是接着打字
    showAnswerButton.addEventListener('click', revealAnswer);

    reviewMistakesButton.addEventListener('click', reviewMistakesOnly);

    window.addEventListener('resize', () => {
        if (confettiParticles.length > 0) resizeConfettiCanvas();
    });

    // --- Initial Execution ---
    // 这里【不】分配撒花画布：一张全屏 DPR2 画布在 iPad 上要十几 MB，而且是全程常驻的。
    // launchConfetti() 内部会按需分配，画完再归还（见 stepConfetti）。
    populateCategorySelector();
    updateAppView('wordSelection');
    updateProgressDisplay();
});
