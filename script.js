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
                { name: "Book 3 - Unit 1", path: "College English/Book 3/B3U1.json" }
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
                { name: "词汇包 1", path: "Stardew Valley/星露谷单词1.json" },
                { name: "词汇包 2", path: "Stardew Valley/星露谷单词2.json" },
                { name: "词汇包 3", path: "Stardew Valley/星露谷单词3.json" },
                { name: "词汇包 4", path: "Stardew Valley/星露谷单词4.json" }
            ]
        },
        {
            category: "My Little Pony",
            lists: [
                { name: "S1E01", path: "My Little Pony/Season 1 Word/Ep01.json" }
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
    const currentChineseHint = document.getElementById('currentChineseHint');
    const phoneticDisplay = document.getElementById('phonetic');
    const resultFeedback = document.getElementById('result');
    const totalWordsCountSpan = document.getElementById('totalWordsCount');
    const reviewedCountSpan = document.getElementById('reviewedCount');
    const incorrectCountSpan = document.getElementById('incorrectCount');
    const incorrectWordsTableBody = document.querySelector('#incorrectWordsTable tbody');
    const incorrectWordsContainer = document.getElementById('incorrectWordsContainer');
    const fileLoadedInfo = document.getElementById('fileLoadedInfo');

    // --- Views ---
    const wordSelectionView = document.getElementById('wordSelectionView');
    const readyToStartView = document.getElementById('readyToStartView');
    const reviewView = document.getElementById('reviewView');
    const reviewCompleteView = document.getElementById('reviewCompleteView');
    const views = [wordSelectionView, readyToStartView, reviewView, reviewCompleteView];

    // --- Sound & Effects ---
    const correctSound = document.getElementById('correctSound');
    const incorrectSound = document.getElementById('incorrectSound');
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

    // --- Utility Functions ---
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    function speak(text) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    }

    // --- Confetti Effect (omitted for brevity, same as before) ---
    const confettiCtx = confettiCanvas.getContext('2d');
    // ... all confetti functions ...

    // --- App View Management ---
    function updateAppView(newState) {
        appState = newState;
        views.forEach(view => view.classList.remove('active-view'));
        const targetView = document.getElementById(newState + 'View');
        if (targetView) {
            targetView.classList.add('active-view');
        }
    }

    function resetProgress() {
        reviewedCountSpan.textContent = '0';
        incorrectCountSpan.textContent = '0';
        totalWordsCountSpan.textContent = wordList ? wordList.length : '0';
        incorrectWords = [];
        currentWordIndex = 0;
    }
    
    function updateProgressDisplay() {
        totalWordsCountSpan.textContent = wordList.length;
        reviewedCountSpan.textContent = Math.max(0, currentWordIndex);
        incorrectCountSpan.textContent = incorrectWords.length;
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
        fileLoadedInfo.textContent = '正在加载单词...';
        try {
            const response = await fetch(path);
            if (!response.ok) throw new Error(`网络错误: ${response.statusText}`);
            const fileData = await response.json();
            
            // 简单的文件格式验证
            const word = fileData[0];
            if (!word || typeof word.english !== 'string' || !Array.isArray(word.pos) || typeof word.phonetic !== 'string') {
                 throw new Error("JSON文件格式无效。");
            }
            
            wordList = fileData;
            fileLoadedInfo.textContent = `加载成功！共 ${wordList.length} 个单词。`;
            resetProgress();
            updateAppView('readyToStart');

        } catch (error) {
            console.error("加载单词文件失败:", error);
            fileLoadedInfo.textContent = `加载失败: ${error.message}`;
        }
    }
    
    function startCurrentReview() {
        if (!currentListPath) return;
        shuffleArray(wordList); // Re-shuffle before starting
        resetProgress();
        updateAppView('review');
        showNextWord();
    }

    function startReview(mode) {
        reviewMode = mode;
        startCurrentReview();
    }

    // ... 其他函数 (showNextWord, checkAnswer, etc.) 保持不变 ...
    function showNextWord() {
        userAnswerInput.value = '';
        resultFeedback.style.display = 'none';
        if (currentWordIndex < wordList.length) {
            const word = wordList[currentWordIndex];
            if (reviewMode === 'dictation') {
                currentChineseHint.innerHTML = '';
                speak(word.english);
            } else {
                const hintHtml = word.pos.map(p => `<div class="meaning-line"><span class="pos-abbr">${p.abbreviation}</span><span class="pos-meaning">${p.meaning}</span></div>`).join('');
                currentChineseHint.innerHTML = hintHtml;
            }
            phoneticDisplay.textContent = word.phonetic;
            phoneticDisplay.style.display = 'none';
            updateProgressDisplay();
            userAnswerInput.focus();
        } else {
            updateAppView('reviewComplete');
            displayIncorrectWords();
        }
    }

    function handleKeyPress(event) {
        if (event.key === "Enter" && appState === 'review') {
            event.preventDefault();
            if (userAnswerInput.value.trim() !== '') checkAnswer();
        } else if (event.shiftKey && (event.code === "Space" || event.key === " ")) {
            event.preventDefault();
            togglePhoneticVisibility();
        }
    }

    function checkAnswer() {
        const userAnswer = userAnswerInput.value.trim();
        const currentWord = wordList[currentWordIndex];
        if (userAnswer.toLowerCase() === currentWord.english.toLowerCase()) {
            correctSound.play().catch(e => console.log("Audio play failed:", e));
            resultFeedback.textContent = `✨ 正确！`;
            resultFeedback.className = 'message-feedback correct-message';
            resultFeedback.style.display = 'block';
            currentWordIndex++;
            updateProgressDisplay();
            setTimeout(() => showNextWord(), 1000);
        } else {
            incorrectSound.play().catch(e => console.log("Audio play failed:", e));
            resultFeedback.textContent = `🤔 错误。正确答案: ${currentWord.english}`;
            resultFeedback.className = 'message-feedback error-message';
            resultFeedback.style.display = 'block';
            if (!incorrectWords.some(item => item.english === currentWord.english)) {
                incorrectWords.push({ ...currentWord, userInput: userAnswer });
                updateProgressDisplay();
            }
            userAnswerInput.classList.add('input-error-shake');
            setTimeout(() => userAnswerInput.classList.remove('input-error-shake'), 400);
        }
    }
    function togglePhoneticVisibility() {
        if (appState !== 'review') return;
        phoneticDisplay.style.display = phoneticDisplay.style.display === "none" ? "block" : "none";
    }

    function displayIncorrectWords() {
        incorrectWordsTableBody.innerHTML = ''; 
        if (incorrectWords.length === 0) {
            completionTitle.textContent = '🎉 完美！全部正确！';
            completionMessage.textContent = '你真是个单词天才！继续保持！';
            incorrectWordsContainer.style.display = 'none';
        } else {
            completionTitle.textContent = '👍 复习完成！';
            completionMessage.textContent = '继续努力，看看下面的错误单词吧。';
            incorrectWordsContainer.style.display = 'block';
            exportButton.style.display = 'inline-flex';
            incorrectWords.forEach(word => {
                const row = incorrectWordsTableBody.insertRow();
                row.insertCell().textContent = word.english;
                const posCell = row.insertCell();
                posCell.innerHTML = word.pos.map(entry => `<div class="meaning-line"><span class="pos-abbr">${entry.abbreviation}</span><span class="pos-meaning">${entry.meaning}</span></div>`).join("");
                row.insertCell().textContent = word.phonetic;
                row.insertCell().textContent = word.userInput;
            });
        }
    }
    
    function exportIncorrectWordsList() { /* ... */ }

    // --- Event Handlers ---
    categorySelector.addEventListener('change', () => {
        const selectedIndex = categorySelector.value;
        if (selectedIndex) { // 如果选择的不是 "-- 请选择 --"
            populateUnitSelector(selectedIndex);
            unitSelector.style.display = 'inline-block';
            loadWordsButton.disabled = false; // 启用“开始学习”按钮
        } else {
            unitSelector.style.display = 'none'; // 隐藏单元菜单
            loadWordsButton.disabled = true; // 禁用按钮
        }
    });
    
    loadWordsButton.addEventListener('click', () => {
        const path = unitSelector.value;
        if (!path) return;
        currentListPath = path; // 保存当前学习列表的路径
        updateAppView('readyToStart');
        fileLoadedInfo.textContent = '准备加载...';
        loadWordsFromServer(currentListPath);
    });

    startSpellingButton.addEventListener('click', () => startReview('spelling'));
    startDictationButton.addEventListener('click', () => startReview('dictation'));
    userAnswerInput.addEventListener('keydown', handleKeyPress);
    exportButton.addEventListener('click', exportIncorrectWordsList);
    
    restartButton.addEventListener('click', startCurrentReview);
    backToSelectionButton.addEventListener('click', () => updateAppView('wordSelection'));
    goBackButton.addEventListener('click', () => updateAppView('wordSelection'));

    playAudioButton.addEventListener('click', () => {
        if (appState === 'review' && currentWordIndex < wordList.length) {
            speak(wordList[currentWordIndex].english);
        }
    });

    // --- Initial Execution ---
    populateCategorySelector();
    updateAppView('wordSelection');
});