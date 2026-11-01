const DEFAULT_DATA = {
    settings: {
        agencyPhone: "+7 (999) 123-45-67",
        agencyEmail: "info@vashdom.ru",
        agencyAddress: "г. Москва, ул. Лесная, д. 12 (офис 101)",
        lastXmlImportDate: "30.10.2026 14:30:00",
        lastXmlImportStatus: "Успешно (Объектов в базе: 6)"
    },
    importLogs: [
        { date: "30.10.2026 14:30:00", status: "Успешно", details: "Импорт из CRM выполнен. Проверены offer/@internal-id и sales-agent/phone." },
        { date: "29.10.2026 18:10:00", status: "Ошибка XML (сохранены предыдущие объекты)", details: "Поврежден закрывающий тег <offer>. Полное затирание отменено." }
    ],
    agents: [
        {
            id: "agent-1", externalId: "crm-ag-01", name: "Анна Смирнова", role: "Руководитель", roleLabel: "Руководитель офиса", phone: "+7 (999) 100-00-01",
            hasMax: true, statusType: "Индивидуальный предприниматель", isCertified: true, isInsured: true,
            photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            bio: "Более 10 лет в сфере недвижимости. Возглавляет команду, определяет стратегию развития и обеспечивает высокий уровень сервиса для каждого клиента.",
            socials: { tg: "https://t.me/vashdom", vk: "https://vk.com/vashdom", max: "max://anna_smirnova" },
            documents: [
                { id: "doc-1", title: "Аттестат руководителя агентства", type: "аттестат", size: "1.4 МБ", isPublic: true },
                { id: "doc-2", title: "Полис страхования ответственности", type: "страховой документ", size: "1.1 МБ", isPublic: true }
            ]
        },
        {
            id: "agent-2", externalId: "crm-ag-02", name: "Екатерина Соколова", role: "Специалист по недвижимости", roleLabel: "Агент по недвижимости", phone: "+7 (999) 123-45-67",
            hasMax: true, statusType: "Самозанятый", isCertified: true, isInsured: true,
            photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            bio: "Агент по недвижимости с опытом работы более 5 лет. Помогаю клиентам купить, продать или арендовать недвижимость в Москве и Московской области.",
            socials: { tg: "https://t.me/sokolova", vk: "https://vk.com/sokolova", max: "max://sokolova" },
            documents: [
                { id: "doc-201", title: "Аттестат специалиста по недвижимости", type: "аттестат", size: "1.2 МБ", isPublic: true },
                { id: "doc-202", title: "Договор страхования", type: "страховой документ", size: "0.8 МБ", isPublic: true },
                { id: "doc-203", title: "Свидетельство о регистрации самозанятого", type: "документ ИП/Самозанятого", size: "0.6 МБ", isPublic: true },
                { id: "doc-204", title: "Внутренний паспорт сделки (Непубличный)", type: "другие документы", size: "1.9 МБ", isPublic: false }
            ]
        },
        {
            id: "agent-3", externalId: "crm-ag-03", name: "Иван Петров", role: "Специалист по недвижимости", roleLabel: "Агент по недвижимости", phone: "+7 (999) 222-33-44",
            hasMax: false, statusType: "Индивидуальный предприниматель", isCertified: true, isInsured: true,
            photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80", videoUrl: "",
            bio: "Специалист по загородным домам и вторичному жилью.", socials: { tg: "https://t.me/petrov", vk: "", max: "" }, documents: []
        },
        {
            id: "agent-4", externalId: "crm-ag-04", name: "Ольга Федорова", role: "Юрист", roleLabel: "Юрист компании", phone: "+7 (999) 444-55-66",
            hasMax: true, statusType: "Самозанятый", isCertified: true, isInsured: true,
            photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80", videoUrl: "",
            bio: "Правовая экспертиза объектов, выпуск юридических заключений.", socials: { tg: "", vk: "", max: "max://olga_law" }, documents: []
        },
        {
            id: "agent-5", externalId: "crm-ag-05", name: "Дарья Волкова", role: "Администратор", roleLabel: "Администратор офиса", phone: "+7 (999) 666-77-88",
            hasMax: true, statusType: "Самозанятый", isCertified: false, isInsured: false,
            photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80", videoUrl: "",
            bio: "Координация клиентов и документооборота офиса.", socials: { tg: "", vk: "", max: "max://daria" }, documents: []
        }
    ],
    objects: [
        {
            id: "obj-101", internalId: "CRM-100451", updatedAt: "30.10.2026 14:30", published: true, category: "Вторичные", homeTypeFilter: "Квартира", dealType: "Продажа",
            rooms: 2, areaTotal: 56, areaLiving: 32, areaKitchen: 10, floor: 4, floorsTotal: 12, price: 12500000,
            city: "Москва", region: "Московская область", district: "САО, район Лесной", street: "ул. Лесная, д. 12", apartment: "кв. 45",
            buildingType: "Панельный", parking: "Есть (во дворе)", elevator: "Есть", communications: "Интернет, ТВ", yearBuilt: 2018,
            renovation: "Евроремонт", balcony: "Лоджия", bathroom: "Раздельный", agentId: "agent-2", newbuildId: "nb-1",
            images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80", "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"],
            description: "Продаётся светлая 2-комнатная квартира в ЖК «Солнечный» с качественным евроремонтом, полностью готова к проживанию."
        },
        {
            id: "obj-102", internalId: "CRM-100452", updatedAt: "30.10.2026 14:30", published: true, category: "Новостройки", homeTypeFilter: "Новостройка", dealType: "Продажа",
            rooms: 3, areaTotal: 78, areaLiving: 48, areaKitchen: 15, floor: 8, floorsTotal: 25, price: 18900000,
            city: "Москва", region: "Московская область", district: "ЗАО, район Приморский", street: "ул. Приморская, д. 8", apartment: "кв. 112",
            buildingType: "Монолитно-кирпичный", parking: "Подземный паркинг", elevator: "Есть", communications: "Оптоволокно, ТВ", yearBuilt: 2026,
            renovation: "Предчистовая", balcony: "Лоджия", bathroom: "Раздельный", agentId: "agent-2", newbuildId: "nb-1",
            images: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80"],
            description: "3-комнатная квартира в современном жилом комплексе."
        },
        {
            id: "obj-103", internalId: "CRM-100453", updatedAt: "30.10.2026 14:30", published: true, category: "Дома", homeTypeFilter: "Дом", dealType: "Продажа",
            rooms: 5, areaTotal: 150, areaLiving: 95, areaKitchen: 24, floor: 2, floorsTotal: 2, price: 25000000,
            city: "Красногорск", region: "Московская область", district: "КП Зелёный бор", street: "д. Лесная, д. 4", apartment: "",
            buildingType: "Кирпичный", parking: "Гараж на 2 авто", elevator: "Нет", communications: "Газ, электричество 15 кВт, септик", yearBuilt: 2024,
            renovation: "Дизайнерский", balcony: "Терраса", bathroom: "3 санузла", agentId: "agent-3", newbuildId: "",
            images: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1000&q=80"],
            description: "Дом в коттеджном посёлке «Зелёный бор» со всеми коммуникациями."
        },
        {
            id: "obj-104", internalId: "CRM-100454", updatedAt: "30.10.2026 14:30", published: true, category: "Бани", homeTypeFilter: "Дом", dealType: "Продажа",
            rooms: 2, areaTotal: 65, areaLiving: 35, areaKitchen: 12, floor: 1, floorsTotal: 1, price: 6800000,
            city: "Истра", region: "Московская область", district: "Истринский район", street: "д. Сосновка, уч. 18", apartment: "",
            buildingType: "Кедровый брус", parking: "На участке", elevator: "Нет", communications: "Вода, электричество", yearBuilt: 2025,
            renovation: "Под ключ", balcony: "Терраса с купелью", bathroom: "Душевая + Парная", agentId: "agent-3", newbuildId: "",
            images: ["https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80"],
            description: "Двухконтурный банный комплекс из кедра на участке 10 соток."
        }
    ],
    newbuilds: [
        {
            id: "nb-1", title: "ЖК «Солнечный»", developer: "ГК «СтройИнвест»", developerUrl: "https://stroyinvest-demo.ru",
            city: "Москва", district: "САО, район Лесной", address: "г. Москва, ул. Лесная, д. 12",
            deadline: "IV квартал 2026", projectClass: "Комфорт-класс", floorsRange: "12–25 этажей", buildingType: "Монолитно-кирпичный",
            priceFrom: 5200000, priceTo: 18900000, areaFrom: 25, areaTo: 120, status: "Опубликовано", order: 1,
            seoTitle: "ЖК Солнечный — купить квартиру от застройщика", seoDesc: "Квартиры в ЖК Солнечный со сдачей в 4 квартале 2026.",
            images: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"],
            description: "Современ жилой комплекс комфорт-класса в экологически чистом районе. Закрытая территория, подземный паркинг, детские площадки."
        }
    ],
    housesIjs: [
        {
            id: "ijs-1", title: "Коттедж «Альпийский» в КП «Зелёный бор»", offerType: "Готовый дом ИЖС с участком",
            region: "Московская область", address: "д. Лесная, КП «Зелёный бор», уч. 14", plotArea: "10 соток", houseArea: "150 м²",
            communications: "Магистральный газ, электричество 15 кВт, вода, септик", priceRange: "25 000 000 ₽",
            status: "Опубликовано", order: 1, seoTitle: "Купить дом ИЖС в КП Зеленый бор", seoDesc: "Дом 150 м2 на участке 10 соток.",
            image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80",
            description: "Двухэтажный загородный дом для круглогодичного проживания со всеми центральными коммуникациями."
        }
    ],
    services: [
        { id: "srv-1", title: "Продажа недвижимости", isPrimary: true, buttonLabel: "Хотите продать?", actionType: "Продажа", icon: "🏠", shortDesc: "Выгодная и безопасная продажа вашей квартиры или дома.", fullDesc: "Оценка, фотосъемка, реклама, показы, подготовка договора и безопасные расчеты." },
        { id: "srv-2", title: "Покупка недвижимости", isPrimary: true, buttonLabel: "Хотите купить?", actionType: "Покупка", icon: "🔑", shortDesc: "Подбор идеального варианта с полной проверкой чистоты.", fullDesc: "Подбор по закрытым базам, торг в ваших интересах, полная юридическая проверка." },
        { id: "srv-3", title: "Ипотека", isPrimary: false, buttonLabel: "Подобрать ипотеку", actionType: "Ипотека", icon: "🏦", shortDesc: "Одобрение ипотеки на лучших условиях банков-партнеров.", fullDesc: "Семейная, IT-ипотека, снижение ставки, сложные случаи." },
        { id: "srv-4", title: "Страхование", isPrimary: false, buttonLabel: "Оформить полис", actionType: "Страхование", icon: "🛡️", shortDesc: "Ипотечное и титульное страхование со скидкой.", fullDesc: "Страхование жизни, конструктива и титула." },
        { id: "srv-5", title: "Экспресс-проверка — юридическое заключение", isPrimary: false, buttonLabel: "Заказать проверку", actionType: "Экспресс-проверка", icon: "⚖️", shortDesc: "Официальное письменное заключение юриста за 24 часа.", fullDesc: "Проверка банкротства, обременений, детских долей и истории переходов права." },
        { id: "srv-6", title: "Консультация — запись на консультацию", isPrimary: false, buttonLabel: "Записаться на консультацию", actionType: "Консультация", icon: "💬", shortDesc: "Бесплатный разбор вашей ситуации в офисе или онлайн.", fullDesc: "Расчет бюджета, налогов и построение цепочки альтернативной сделки." }
    ],
    reviews: [
        { id: "rev-1", author: "Елена К.", serviceTag: "Покупка квартиры", agentId: "agent-1", agentName: "Анна Смирнова", date: "12 апреля 2026", status: "Опубликован", text: "Благодарю команду агентства за профессионализм и поддержку на всех этапах сделки!" },
        { id: "rev-2", author: "Анна К.", serviceTag: "Покупка квартиры", agentId: "agent-2", agentName: "Екатерина Соколова", date: "18 марта 2026", status: "Опубликован", text: "Екатерина помогла нам найти идеальную квартиру в ЖК Солнечный! Всё прошло быстро и без хлопот." },
        { id: "rev-3", author: "Виктор М.", serviceTag: "Консультация", agentId: "agent-2", agentName: "Екатерина Соколова", date: "30 октября 2026", status: "На модерации", text: "Этот новый отзыв находится на премодерации и скрыт от посетителей до публикации в админке." }
    ],
    blog: [
        {
            id: "post-1", slug: "kak-bezopasno-kupit-kvartiru-2026", title: "Как безопасно купить квартиру на вторичном рынке в 2026 году",
            excerpt: "Чек-лист юриста: проверяем банкротство продавца, маткапитал и историю переходов права.", date: "25 октября 2026", dateSort: "2026-10-25",
            status: "Опубликовано", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80",
            seoTitle: "Как безопасно купить квартиру в 2026 году — чек-лист юриста", seoDesc: "Пошаговая проверка юридической чистоты квартиры перед покупкой.", seoKeywords: "покупка квартиры, юридическая проверка, вторичка",
            content: "<p>Покупка квартиры требует комплексной проверки собственника по базам ФССП и ЕФРСБ, а также использования безопасных безналичных расчетов (аккредитив).</p>"
        },
        {
            id: "post-2", slug: "chernovik-prognoz-rynka", title: "[Черновик] Аналитика цен на новостройки",
            excerpt: "Статья в статусе Черновик — не отображается в публичной ленте блога.", date: "30 октября 2026", dateSort: "2026-10-30",
            status: "Черновик", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
            seoTitle: "Черновик", seoDesc: "Черновик", seoKeywords: "аналитика",
            content: "<p>Текст черновика.</p>"
        }
    ],
    leads: []
};

function getDB() {
    const raw = localStorage.getItem('vashdom_db_v1');
    if (!raw) {
        localStorage.setItem('vashdom_db_v1', JSON.stringify(DEFAULT_DATA));
        return DEFAULT_DATA;
    }
    try { return JSON.parse(raw); } catch (e) { return DEFAULT_DATA; }
}

function saveDB(db) {
    localStorage.setItem('vashdom_db_v1', JSON.stringify(db));
}

function formatPrice(num) {
    return Number(num).toLocaleString('ru-RU') + ' ₽';
}

function getObjectTitle(obj) {
    if (obj.category === "Бани") return `Банный комплекс ${obj.areaTotal} м², ${obj.street}`;
    if (obj.category === "Дома") return `Дом ${obj.areaTotal} м² (${obj.rooms} комн.), ${obj.street}`;
    return `${obj.rooms}-комнатная квартира на ${obj.street} (${obj.floor}/${obj.floorsTotal} эт.)`;
}

function renderObjectCard(obj) {
    const title = getObjectTitle(obj);
    return `
        <div class="bg-white rounded-2xl shadow-sm hover:shadow-xl transition border border-slate-100 overflow-hidden flex flex-col">
            <a href="catalog.html?view=${obj.id}" class="relative h-48 overflow-hidden block">
                <img src="${obj.images[0]}" alt="${title}" class="w-full h-full object-cover">
                <span class="absolute top-3 left-3 bg-brand-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-md">${obj.category}</span>
                <span class="absolute bottom-2 right-2 bg-slate-900/75 text-white text-[10px] px-2 py-0.5 rounded">ID: ${obj.internalId}</span>
            </a>
            <div class="p-5 flex-1 flex flex-col justify-between">
                <div>
                    <a href="catalog.html?view=${obj.id}" class="font-bold text-slate-900 hover:text-brand-600 transition text-sm leading-snug block">${title}</a>
                    <p class="text-xs text-slate-500 mt-1">📍 ${obj.city}, ${obj.district}</p>
                    <p class="text-lg font-extrabold text-slate-900 mt-2.5">${formatPrice(obj.price)}</p>
                </div>
                <div class="mt-3 pt-2.5 border-t border-slate-100 flex justify-between text-xs text-slate-600">
                    <span>📐 ${obj.areaTotal} м²</span>
                    <span>🚪 ${obj.rooms} комн.</span>
                    <span>🏢 ${obj.floor}/${obj.floorsTotal} эт.</span>
                </div>
            </div>
        </div>
    `;
}

function handleLeadSubmit(name, phone, action, source, agentId = '', comment = '', feedbackEl = null) {
    const db = getDB();
    let route = "Общий чат агентства в мессенджере MAX";
    if (agentId) {
        const ag = db.agents.find(a => a.id === agentId);
        if (ag) {
            route = ag.hasMax ? `Личный MAX агента ${ag.name} (${ag.phone})` : `Общий чат агентства (MAX агента не активен)`;
        }
    }
    db.leads.unshift({
        id: "lead-" + Date.now(),
        date: new Date().toLocaleString('ru-RU'),
        name, phone, action, source, route, comment
    });
    saveDB(db);
    if (feedbackEl) {
        feedbackEl.innerHTML = `✅ Заявка отправлена!<br>Действие: <b>${action}</b> | Источник: <b>${source}</b><br>Маршрут: ${route}`;
        feedbackEl.classList.remove('hidden');
    } else {
        alert(`Заявка принята!\nДействие: ${action}\nИсточник: ${source}\nКанал доставки: ${route}`);
    }
}