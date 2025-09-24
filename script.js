// База данных агентов
const agents = {
    "jett": { name: "Jett", role: "duelist", img: "img/jett.png" },
    "raze": { name: "Raze", role: "duelist", img: "img/raze.png" },
    "phoenix": { name: "Phoenix", role: "duelist", img: "img/phoenix.png" },
    "reyna": { name: "Reyna", role: "duelist", img: "img/reyna.png" },
    "yoru": { name: "Yoru", role: "duelist", img: "img/yoru.png" },
    "neon": { name: "Neon", role: "duelist", img: "img/neon.png" },
    "iso": { name: "Iso", role: "duelist", img: "img/iso.png" },
    "waylay": { name: "Waylay", role: "duelist", img: "img/waylay.png" },
    "sova": { name: "Sova", role: "initiator", img: "img/sova.png" },
    "breach": { name: "Breach", role: "initiator", img: "img/breach.png" },
    "skye": { name: "Skye", role: "initiator", img: "img/skye.png" },
    "kayo": { name: "KAY/O", role: "initiator", img: "img/kayo.png" },
    "fade": { name: "Fade", role: "initiator", img: "img/fade.png" },
    "gekko": { name: "Gekko", role: "initiator", img: "img/gekko.png" },
    "tejo": { name: "Tejo", role: "initiator", img: "img/tejo.png" },
    "brimstone": { name: "Brimstone", role: "controller", img: "img/brimstone.png" },
    "viper": { name: "Viper", role: "controller", img: "img/viper.png" },
    "clove": { name: "Clove", role: "controller", img: "img/clove.png" },
    "omen": { name: "Omen", role: "controller", img: "img/omen.png" },
    "astra": { name: "Astra", role: "controller", img: "img/astra.png" },
    "harbor": { name: "Harbor", role: "controller", img: "img/harbor.png" },
    "killjoy": { name: "Killjoy", role: "sentinel", img: "img/killjoy.png" },
    "vyse": { name: "Vyse", role: "sentinel", img: "img/vyse.png" },
    "cypher": { name: "Cypher", role: "sentinel", img: "img/cypher.png" },
    "sage": { name: "Sage", role: "sentinel", img: "img/sage.png" },
    "chamber": { name: "Chamber", role: "sentinel", img: "img/chamber.png" },
    "deadlock": { name: "Deadlock", role: "sentinel", img: "img/deadlock.png" }
};

// База данных карт и рекомендаций по агентам (условные рейтинги от 1 до 5)
// Это упрощенная версия. В реальном проекте данные нужно будет уточнять.
const mapData = {
    "abyss": {
        name: "Abyss",
        strongAgents: {
            "clove": 5,
            "sova": 4, "phoenix": 4, "sage": 4, "reyna": 4, "vyse": 4, "jett": 4, "neon": 4, "cypher": 4, "chamber": 4, "brimstone": 4, "gekko": 4, "iso": 4,
            "deadlock": 3, "fade": 3, "raze": 3, "tejo": 3, "breach": 3, "skye": 3, "waylay": 3, "yoru": 3, "astra": 3,
            "killjoy": 2, "viper": 2, "omen": 2, "kayo": 2,
            "harbor": 1,
        }
    },
    "lotus": {
        name: "Lotus",
        strongAgents: {
            "clove": 5,
            "deadlock": 4,"raze": 4,"killjoy": 4,"viper": 4,"fade": 4,"sova": 4,  "sage": 4, "reyna": 4,
            "vyse": 4, "jett": 4, "neon": 4, "cypher": 3, "chamber": 4, "brimstone": 3, "gekko": 3, 
            "iso": 3,"phoenix": 3,"tejo": 3, "breach": 3, "skye": 3, "waylay": 3, "yoru": 3, "astra": 2,
            "omen": 2, "kayo": 2,
            "harbor": 1,
        }
    },
    "corrode": {
        name: "Corrode",
        strongAgents: {
            "clove": 5,
            "deadlock": 4,
            "raze": 4,
            "killjoy": 3,
            "viper": 4,
            "fade": 4,
            "sova": 4,  
            "sage": 4, 
            "reyna": 4,
            "vyse": 4, 
            "jett": 4, 
            "neon": 4, 
            "cypher": 4, 
            "chamber": 4, 
            "brimstone": 3, 
            "gekko": 3, 
            "iso": 3,
            "phoenix": 4,
            "tejo": 3, 
            "breach": 3, 
            "skye": 4, 
            "waylay": 3, 
            "yoru": 4, 
            "astra": 3,
            "omen": 2, 
            "kayo": 2,
            "harbor": 1,
        }
    },
    "haven": {
        name: "Haven",
        strongAgents: {
            "clove": 5,
            "deadlock": 3,
            "raze": 4,
            "killjoy": 4,
            "viper": 3,
            "fade": 4,
            "sova": 4,  
            "sage": 4, 
            "reyna": 3,
            "vyse": 4, 
            "jett": 4, 
            "neon": 4, 
            "cypher": 4, 
            "chamber": 3, 
            "brimstone": 3, 
            "gekko": 3, 
            "iso": 3,
            "phoenix": 5,
            "tejo": 1, 
            "breach": 3, 
            "skye": 3, 
            "waylay": 2, 
            "yoru": 2, 
            "astra": 1,
            "omen": 4, 
            "kayo": 1,
            "harbor": 1,
        }
    },
    "sunset": {
        name: "Sunset",
        strongAgents: {
            "clove": 5,
            "deadlock": 4,
            "raze": 4,
            "killjoy": 4,
            "viper": 4,
            "fade": 4,
            "sova": 4,  
            "sage": 5, 
            "reyna": 4,
            "vyse": 4, 
            "jett": 4, 
            "neon": 5, 
            "cypher": 4, 
            "chamber": 4, 
            "brimstone": 4, 
            "gekko": 4, 
            "iso": 4,
            "phoenix": 5,
            "tejo": 3, 
            "breach": 4, 
            "skye": 5, 
            "waylay": 4, 
            "yoru": 3, 
            "astra": 3,
            "omen": 3, 
            "kayo": 3,
            "harbor": 1,
        }
    },
    "blind": {
        name: "Blind",
        strongAgents: {
            "clove": 5,
            "deadlock": 5,
            "raze": 4,
            "killjoy": 3,
            "viper": 4,
            "fade": 5,
            "sova": 5,  
            "sage": 5, 
            "reyna": 4,
            "vyse": 4, 
            "jett": 4, 
            "neon": 5, 
            "cypher": 4, 
            "chamber": 4, 
            "brimstone": 4, 
            "gekko": 4, 
            "iso": 4,
            "phoenix": 4,
            "tejo": 3, 
            "breach": 3, 
            "skye": 4, 
            "waylay": 3, 
            "yoru": 4, 
            "astra": 2,
            "omen": 2, 
            "kayo": 2,
            "harbor": 1,
        }
    },
    "ascent": {
        name: "Ascent",
        strongAgents: {
            "clove": 5,
            "deadlock": 4,
            "raze": 4,
            "killjoy": 4,
            "viper": 4,
            "fade": 4,
            "sova": 5,  
            "sage": 5, 
            "reyna": 4,
            "vyse": 4, 
            "jett": 4, 
            "neon": 4, 
            "cypher": 5, 
            "chamber": 4, 
            "brimstone": 4, 
            "gekko": 3, 
            "iso": 4,
            "phoenix": 5,
            "tejo": 4, 
            "breach": 3, 
            "skye": 4, 
            "waylay": 3, 
            "yoru": 4, 
            "astra": 3,
            "omen": 3, 
            "kayo": 3,
            "harbor": 1,
        }
    },
    // ... Добавьте другие карты (Ascent, Icebox, Breeze, Fracture, Pearl, Lotus)
};

// Глобальные переменные для хранения текущего выбора пользователя
let selectedMap = null;
let selectedAllies = []; // Массив для хранения ключей выбранных агентов (например, ['jett', 'sova'])
// Добавляем в глобальные переменные
let preferredAgents = []; // Массив для предпочтительных агентов




// Элементы DOM
const mapsContainer = document.getElementById('map-container');
const agentsContainer = document.getElementById('agents-container');
const selectedAlliesList = document.getElementById('selected-allies-list');
const recommendBtn = document.getElementById('recommend-btn');
const recommendationContainer = document.getElementById('recommendation-container');
const recommendationList = document.getElementById('recommendation-list');
const filterButtons = document.querySelectorAll('.filter-btn');


// Функция для создания кнопок карт
function initializeMaps() {
    for (const mapKey in mapData) {
        const map = mapData[mapKey];
        const button = document.createElement('button');
        button.className = 'map-btn';
        button.textContent = map.name;
        button.dataset.mapId = mapKey;
        button.addEventListener('click', () => selectMap(mapKey, button));
        mapsContainer.appendChild(button);
    }
}

// Функция для создания кнопок агентов
function initializeAgents() {
    for (const agentKey in agents) {
        const agent = agents[agentKey];
        const button = document.createElement('button');
        button.className = 'agent-btn';
        button.textContent = agent.name;
        button.dataset.agentId = agentKey;
        button.dataset.role = agent.role;
        button.addEventListener('click', () => selectAlly(agentKey, button));
        agentsContainer.appendChild(button);
    }
}

// Функция выбора карты
function selectMap(mapKey, buttonElement) {
    selectedMap = mapKey;
    // Снимаем выделение со всех кнопок карт
    document.querySelectorAll('.map-btn').forEach(btn => btn.classList.remove('selected'));
    // Выделяем выбранную карту
    buttonElement.classList.add('selected');
}

// Функция выбора союзника
function selectAlly(agentKey, buttonElement) {
    // Максимум 4 союзника
    if (selectedAllies.includes(agentKey)) {
        // Если агент уже выбран, убираем его (отмена выбора)
        selectedAllies = selectedAllies.filter(id => id !== agentKey);
        buttonElement.classList.remove('selected');
    } else if (selectedAllies.length < 4) {
        // Если есть место, добавляем агента
        selectedAllies.push(agentKey);
        buttonElement.classList.add('selected');
    } else {
        alert("Максимум можно выбрать 4 союзника!");
        return;
    }
    updateSelectedAlliesList();
}

// Обновление списка выбранных союзников
function updateSelectedAlliesList() {
    selectedAlliesList.innerHTML = '';
    selectedAllies.forEach(agentKey => {
        const li = document.createElement('li');
        li.textContent = agents[agentKey].name;
        selectedAlliesList.appendChild(li);
    });
}

// Фильтрация агентов по роли
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const role = button.dataset.role;
        // Активный класс для кнопки фильтра
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Показываем/скрываем агентов
        document.querySelectorAll('.agent-btn').forEach(agentBtn => {
            if (role === 'all' || agentBtn.dataset.role === role) {
                agentBtn.style.display = 'inline-block';
            } else {
                agentBtn.style.display = 'none';
            }
        });
    });
});





// Основная функция для получения рекомендации
function getRecommendation() {
    if (!selectedMap) {
        alert("Сначала выбери карту!");
        return;
    }

    const strongAgentsOnMap = mapData[selectedMap].strongAgents;
    const availableAgents = {};

    // Исключаем выбранных союзников
    for (const agentKey in agents) {
        if (!selectedAllies.includes(agentKey)) {
            availableAgents[agentKey] = agents[agentKey];
        }
    }

    const agentScores = [];

    for (const agentKey in availableAgents) {
        let score = 0;

        // 1. Балл за силу на карте
        const mapScore = strongAgentsOnMap[agentKey] || 0;
        score += mapScore * 10;

        // 2. Бонус за баланс команды
        const teamRoles = selectedAllies.map(id => agents[id].role);
        const currentAgentRole = agents[agentKey].role;
        const sameRoleCount = teamRoles.filter(role => role === currentAgentRole).length;
        const balanceBonus = (4 - sameRoleCount) * 5;
        score += balanceBonus;

        // 3. Бонус за предпочтения
        const preferenceBonus = preferredAgents.includes(agentKey) ? 15 : 0;
        score += preferenceBonus;

        // Правильно передаем все данные
        agentScores.push({ 
            agentKey: agentKey,
            score: score,
            mapScore: mapScore,           // Теперь это число (0-5)
            balanceBonus: balanceBonus,   // Теперь это число
            preferenceBonus: preferenceBonus // Теперь это число (0 или 15)
        });
    }

    // Сортируем по убыванию баллов
    agentScores.sort((a, b) => b.score - a.score);
    const topRecommendations = agentScores.slice(0, 5);

    // Отладочная информация
    console.log("Рекомендации:", topRecommendations);
    displayRecommendation(topRecommendations);
}

// Функция для отображения рекомендаций
function displayRecommendation(recommendations) {
    recommendationList.innerHTML = '';
    
    recommendations.forEach(rec => {
        const agent = agents[rec.agentKey];
        const card = document.createElement('div');
        card.className = 'agent-card';
        
        // Простая и надежная версия без деталей счета
        const preferenceIcon = preferredAgents.includes(rec.agentKey) ? '★ ' : '';
        
        card.innerHTML = `
            <img src="${agent.img}" alt="${agent.name}" onerror="this.style.display='none'">
            <h3>${preferenceIcon}${agent.name}</h3>
            <p>Роль: ${agent.role}</p>
            <div class="score-breakdown">
                <small>Карта: +${rec.mapScore * 10}</small>
                <small>Баланс: +${rec.balanceBonus}</small>
                <small>Предпочтение: +${rec.preferenceBonus}</small>
                <strong>Итого: ${rec.score}</strong>
            </div>
        `;
        recommendationList.appendChild(card);
    });
    
    recommendationContainer.style.display = 'block';
}



// Функция инициализации предпочтений
function initializePreferredAgents() {
    const container = document.getElementById('preferred-agents-container');
    
    // Создаем кнопки для всех агентов
    for (const agentKey in agents) {
        const agent = agents[agentKey];
        const button = document.createElement('button');
        button.className = 'agent-btn preferred-btn';
        button.textContent = agent.name;
        button.dataset.agentId = agentKey;
        button.dataset.role = agent.role;
        button.addEventListener('click', () => togglePreferredAgent(agentKey, button));
        container.appendChild(button);
    }
    
    // Загружаем сохраненные предпочтения
    loadPreferredAgents();
}

// Функция переключения предпочтительного агента
function togglePreferredAgent(agentKey, buttonElement) {
    if (preferredAgents.includes(agentKey)) {
        // Удаляем из предпочтений
        preferredAgents = preferredAgents.filter(id => id !== agentKey);
        buttonElement.classList.remove('selected');
    } else {
        // Добавляем в предпочтения (можно ограничить количество, например, 5)
        if (preferredAgents.length < 8) {
            preferredAgents.push(agentKey);
            buttonElement.classList.add('selected');
        } else {
            alert("Можно выбрать до 8 любимых агентов!");
            return;
        }
    }
    updatePreferredAgentsList();
    savePreferredAgents(); // Сохраняем в LocalStorage
}

// Обновление списка предпочтений
function updatePreferredAgentsList() {
    const list = document.getElementById('selected-preferred-list');
    list.innerHTML = '';
    
    preferredAgents.forEach(agentKey => {
        const li = document.createElement('li');
        li.textContent = agents[agentKey].name;
        
        // Кнопка удаления из предпочтений
        const removeBtn = document.createElement('button');
        removeBtn.textContent = '×';
        removeBtn.className = 'remove-btn';
        removeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            removePreferredAgent(agentKey);
        });
        
        li.appendChild(removeBtn);
        list.appendChild(li);
    });
}

// Удаление агента из предпочтений
function removePreferredAgent(agentKey) {
    preferredAgents = preferredAgents.filter(id => id !== agentKey);
    savePreferredAgents();
    loadPreferredAgents(); // Перезагружаем отображение
}

// Сохранение предпочтений
function savePreferredAgents() {
    localStorage.setItem('valorantPreferredAgents', JSON.stringify(preferredAgents));
}

// Загрузка предпочтений
function loadPreferredAgents() {
    const saved = localStorage.getItem('valorantPreferredAgents');
    if (saved) {
        preferredAgents = JSON.parse(saved);
    }
    
    // Обновляем визуальное состояние кнопок
    document.querySelectorAll('.preferred-btn').forEach(button => {
        const agentKey = button.dataset.agentId;
        if (preferredAgents.includes(agentKey)) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });
    
    updatePreferredAgentsList();
}


// Вешаем обработчик на кнопку "Найти лучшего агента!"
recommendBtn.addEventListener('click', getRecommendation);

// Инициализируем интерфейс при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
    initializeMaps();
    initializeAgents();
    initializePreferredAgents();
});