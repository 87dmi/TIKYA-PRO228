// Базовые функции управления интерфейсом холдинга TIKYA
function openM(id) { 
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'flex'; 
    }
}

function closeM(id) { 
    const modal = document.getElementById(id);
    if (modal) modal.style.display = 'none'; 
}

// Авторский переводчик
function runTranslate() {
    var l = document.getElementById("transInput").value.trim();
    var o = document.getElementById("transOutput");
    if (!l) return;
    var low = l.toLowerCase();
    var r = l + " (переведено через TIKYA API)";
    
    if (low === "привет") r = "Hello";
    else if (low === "разработчик") r = "Developer";
    else if (low === "как дела") r = "How are you";
    else if (low === "ржака") r = "Hilarious";
    
    o.innerHTML = "<b>Перевод:</b> " + r;
}

// Встроенный ИИ TIKYA AI с поддержкой тем
function sendAi() {
    var i = document.getElementById("aiInput");
    var b = document.getElementById("aiBox");
    var t = i.value.trim();
    if (!t) return;
    
    b.innerHTML += "<br><b>Вы:</b> " + t;
    i.value = "";
    b.scrollTop = b.scrollHeight;
    
    setTimeout(function() {
        var r = "Я изучаю запрос... Спроси меня про 'Диму', 'ТикТок' или новые Т-сервисы холдинга!";
        var l = t.toLowerCase();
        
        if (l.includes("привет")) {
            r = "Привет! Я ИИ TIKYA. Оценил наши новые Т-сервисы холдинга? Плеер T-music подключен к Яндекс.Музыке! 🎵🎧";
        } else if (l.includes("дима") || l.includes("ржака")) {
            r = "Канал РЖАКА/ДИМА — это полный разрыв рекомендаций! 🔥💥";
        } else if (l.includes("музыка") || l.includes("плеер")) {
            r = "В плеер T-music мы успешно встроили официальное API Яндекс Музыки! Слушай треки с кайфом. 🎵";
        } else if (l.includes("анекдот") || l.includes("шутка")) {
            r = "Почему программисты любят темную тему? Потому что свет привлекает багов! 🐛😂";
        }
        
        b.innerHTML += "<br><b>ИИ:</b> " + r;
        b.scrollTop = b.scrollHeight;
    }, 300);
}

// Система техподдержки
function sendSup() {
    var i = document.getElementById("supInput");
    var b = document.getElementById("supBox");
    var t = i.value.trim();
    if (!t) return;
    
    b.innerHTML += "<br><b>Вы:</b> " + t;
    i.value = "";
    b.scrollTop = b.scrollHeight;
    
    setTimeout(function() {
        b.innerHTML += "<br><b>Агент:</b> Обращение принято! Наш специалист свяжется с вами.";
        b.scrollTop = b.scrollHeight;
    }, 400);
}

function checkPromo() {
    let inp = document.getElementById('promoInput').value.toUpperCase();
    let status = document.getElementById('promoStatus');
    if(inp === 'DIMA228' || inp === 'TIKYALUX') {
        status.style.color = '#2ecc71'; 
        status.innerText = 'Промокод успешно активирован!';
        document.getElementById('premiumBadge').style.display = 'block';
    } else {
        status.style.color = '#ea4335'; 
        status.innerText = 'Неверный промокод.';
    }
}

function submitReg(e) {
    e.preventDefault();
    document.getElementById('regBtn').style.display = 'none';
    document.getElementById('logoutBtn').style.display = 'inline-block';
    closeM('regModal');
}

function logout() {
    document.getElementById('regBtn').style.display = 'inline-block';
    document.getElementById('logoutBtn').style.display = 'none';
    document.getElementById('premiumBadge').style.display = 'none';
}

function submitMail(e) {
    e.preventDefault();
    alert('Сообщение успешно отправлено через шлюзы Tmail!');
    closeM('tmailModal');
}

// Т-Облако
function handleCloudUpload() {
    const fileInput = document.getElementById('cloudFileInput');
    if (!fileInput || fileInput.files.length === 0) {
        alert('Выберите файл для загрузки в облако TIKYA!');
        return;
    }
    alert(`Файл "\${fileInput.files[0].name}" успешно загружен в T-Облако!`);
}

// Т-Скорость Wi-Fi
function runSpeedTest() {
    const display = document.getElementById('speedDisplay');
    const progressContainer = document.getElementById('speedProgress');
    const bar = document.getElementById('speedBar');
    const btn = document.getElementById('startSpeedBtn');

    if(!display || !bar || !btn) return;

    btn.disabled = true;
    btn.innerText = 'Тестирование...';
    progressContainer.style.display = 'block';
    bar.style.width = '0%';
    display.innerHTML = 'Подключение...';

    let progress = 0;
    let interval = setInterval(() => {
        progress += Math.random() * 15;
        if(progress > 100) progress = 100;
        bar.style.width = progress + '%';

        let currentSpeed = (Math.random() * (95 - 45) + 45).toFixed(2);
        display.innerHTML = `\${currentSpeed} <span style="font-size:16px;">Мбит/с</span>`;

        if(progress === 100) {
            clearInterval(interval);
            let finalSpeed = (Math.random() * (98 - 75) + 75).toFixed(2);
            display.innerHTML = `\${finalSpeed} <span style="font-size:16px;">Мбит/с</span>`;
            btn.disabled = false;
            btn.innerText = 'Повторить тест';
        }
    }, 200);
}

// Т-Пароль
function generateSecurePassword() {
    const length = parseInt(document.getElementById('passLength').value) || 12;
    const useDigits = document.getElementById('passDigits').checked;
    const useSpecial = document.getElementById('passSpecial').checked;
    const output = document.getElementById('passOutput');

    if(!output) return;

    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';
    const special = '!@#$%^&*()_+~`|}{:;?><,./-=';

    let pool = letters;
    if (useDigits) pool += digits;
    if (useSpecial) pool += special;

    if (length < 4 || length > 64) {
        alert('Рекомендуемая длина пароля от 4 до 64 символов');
        return;
    }

    let password = '';
    const randomValues = new Uint32Array(length);
    window.crypto.getRandomValues(randomValues);

    for (let i = 0; i < length; i++) {
        password += pool[randomValues[i] % pool.length];
    }

    output.value = password;
    output.select();
}
