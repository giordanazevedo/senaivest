// State Management
let currentTab = 'inicio';
let currentLab = null;

// Mock Data for Almoxarifados (Labs 1, 2, and 3)
let inventory = [
    // --- LAB 1 ---
    // Ferramentas
    {
        id: 1,
        lab: 1,
        category: 'ferramentas',
        name: 'Réguas de 60cm',
        quantity: '30x',
        location: 'Prateleira 1A',
        meta: 'Horario de entrada: 08:35 AM | Responsável: Prof. Carlos',
        status: 'Não Pertencente',
        emoji: '📏',
        bgGradient: 'linear-gradient(135deg, #74ebd5, #9face6)'
    },
    {
        id: 2,
        lab: 1,
        category: 'ferramentas',
        name: 'Rolos de Linha',
        quantity: '18x',
        location: 'Prateleira 1A',
        meta: 'Horario de saída: 07:30 AM | Responsável: Prof(a). Emanuela | Registro: Almox-Lab2 às 7:40AM',
        status: 'Não apresenta no estoque',
        emoji: '🧵',
        bgGradient: 'linear-gradient(135deg, #ff9a9e, #fecfef)'
    },
    {
        id: 3,
        lab: 1,
        category: 'ferramentas',
        name: 'Tesoura de Costura 17,8cm',
        quantity: '25x',
        location: 'Prateleira 1A',
        meta: 'Entrada padrão',
        status: 'Pertencente',
        emoji: '✂️',
        bgGradient: 'linear-gradient(135deg, #a1c4fd, #c2e9fb)'
    },
    // Tecidos
    {
        id: 4,
        lab: 1,
        category: 'tecidos',
        name: 'Tecido de Malha Twill Azul',
        quantity: '5x rolos',
        location: 'Prateleira 2A',
        meta: 'Lote importado',
        status: 'Pertencente',
        emoji: '👕',
        bgGradient: 'linear-gradient(135deg, #2575fc, #6a11cb)'
    },
    {
        id: 5,
        lab: 1,
        category: 'tecidos',
        name: 'Tecido Jeans Pesado 100% Algodão',
        quantity: '8x rolos',
        location: 'Prateleira 2A',
        meta: 'Gramatura reforçada',
        status: 'Pertencente',
        emoji: '👖',
        bgGradient: 'linear-gradient(135deg, #2c3e50, #3498db)'
    },
    {
        id: 6,
        lab: 1,
        category: 'tecidos',
        name: 'Tecido Crepe Duna (Air Flow)',
        quantity: '8x rolos',
        location: 'Prateleira 2A',
        meta: 'Diversas cores',
        status: 'Pertencente',
        emoji: '👗',
        bgGradient: 'linear-gradient(135deg, #ff758c, #ff7eb3)'
    },
    // Moldes
    {
        id: 7,
        lab: 1,
        category: 'moldes',
        name: 'Rolo de Papel Kraft',
        quantity: '15x rolos',
        location: 'Armário 1',
        meta: 'Largura 120cm',
        status: 'Pertencente',
        emoji: '📜',
        bgGradient: 'linear-gradient(135deg, #f39c12, #f1c40f)'
    },
    {
        id: 8,
        lab: 1,
        category: 'moldes',
        name: 'Rolo de Papel Manteiga',
        quantity: '15x rolos',
        location: 'Armário 1',
        meta: 'Largura 80cm',
        status: 'Pertencente',
        emoji: '🗞️',
        bgGradient: 'linear-gradient(135deg, #bdc3c7, #2c3e50)'
    },
    {
        id: 9,
        lab: 1,
        category: 'moldes',
        name: 'Carretilha de Madeira P/ Corte',
        quantity: '25x un',
        location: 'Prateleira 1B',
        meta: 'Cabo anatômico',
        status: 'Pertencente',
        emoji: '⚙️',
        bgGradient: 'linear-gradient(135deg, #e67e22, #d35400)'
    },
    {
        id: 10,
        lab: 1,
        category: 'moldes',
        name: 'Carretilha Para Marcar Tecido Círculo',
        quantity: '10x un',
        location: 'Prateleira 1B',
        meta: 'Marcação dupla',
        status: 'Pertencente',
        emoji: '🔄',
        bgGradient: 'linear-gradient(135deg, #16a085, #2ecc71)'
    },

    // --- LAB 2 ---
    {
        id: 11,
        lab: 2,
        category: 'ferramentas',
        name: 'Máquina Overlock Industrial',
        quantity: '4x un',
        location: 'Estação C3',
        meta: 'Manutenção realizada em Maio',
        status: 'Pertencente',
        emoji: '⚙️',
        bgGradient: 'linear-gradient(135deg, #a1c4fd, #c2e9fb)'
    },
    {
        id: 12,
        lab: 2,
        category: 'tecidos',
        name: 'Tecido de Cetim Toque de Seda',
        quantity: '12x rolos',
        location: 'Prateleira A1',
        meta: 'Uso restrito formandos',
        status: 'Pertencente',
        emoji: '🎀',
        bgGradient: 'linear-gradient(135deg, #ff758c, #ff7eb3)'
    },

    // --- LAB 3 ---
    {
        id: 13,
        lab: 3,
        category: 'ferramentas',
        name: 'Ferros de Passar Industriais a Vapor',
        quantity: '6x un',
        location: 'Mesa de Passar 1',
        meta: 'Cuidado: Temperatura alta',
        status: 'Pertencente',
        emoji: '💨',
        bgGradient: 'linear-gradient(135deg, #bdc3c7, #2c3e50)'
    },
    {
        id: 14,
        lab: 3,
        category: 'moldes',
        name: 'Manequins de Costura Ajustáveis',
        quantity: '5x un',
        location: 'Estúdio Central',
        meta: 'Tamanhos 38 a 46',
        status: 'Pertencente',
        emoji: '🧍',
        bgGradient: 'linear-gradient(135deg, #f39c12, #f1c40f)'
    }
];

// Mock Data for Lesson Plans
let lessonPlans = [
    {
        id: 1,
        date: '2026-06-15',
        course: 'Costura e Modelagem Industrial A',
        topic: 'Traçado de Molde Base da Saia Reta',
        objectives: 'Capacitar o aluno a realizar as marcações antropométricas básicas e transferi-las para o papel kraft.',
        resources: [
            { id: 7, name: 'Rolo de Papel Kraft', lab: 1, quantity: '3 rolos' },
            { id: 1, name: 'Réguas de 60cm', lab: 1, quantity: '15x' },
            { id: 9, name: 'Carretilha de Madeira P/ Corte', lab: 1, quantity: '10x' }
        ]
    },
    {
        id: 2,
        date: '2026-06-17',
        course: 'Processos de Vestuário - Turma B',
        topic: 'Corte e Costura de Malhas Twill',
        objectives: 'Exercitar o manuseio de máquina overlock no fechamento de golas e bainhas de tecido elástico.',
        resources: [
            { id: 4, name: 'Tecido de Malha Twill Azul', lab: 1, quantity: '2 rolos' },
            { id: 2, name: 'Rolos de Linha', lab: 1, quantity: '8x' },
            { id: 3, name: 'Tesoura de Costura 17,8cm', lab: 1, quantity: '10x' }
        ]
    },
    {
        id: 3,
        date: '2026-06-20',
        course: 'Modelagem sob Medida Avançada',
        topic: 'Ajuste de Peça Piloto em Manequim',
        objectives: 'Demonstrar as técnicas de moulage em manequim e transferência de pences na saia drapeada.',
        resources: [
            { id: 14, name: 'Manequins de Costura Ajustáveis', lab: 3, quantity: '4x' },
            { id: 3, name: 'Tesoura de Costura 17,8cm', lab: 1, quantity: '5x' }
        ]
    }
];

// Mock Data for Notifications
let notifications = [
    {
        id: 1,
        type: 'warning',
        title: 'Estoque Baixo: Réguas',
        message: 'A quantidade de Réguas de 60cm no Almoxarifado Lab 1 está abaixo do limite de segurança.',
        time: 'há 10 min',
        read: false
    },
    {
        id: 2,
        type: 'warning',
        title: 'Material Ausente: Rolos de Linha',
        message: '18x Rolos de Linha não localizados no estoque do Almoxarifado Lab 1. Material retirado por Prof(a). Emanuela às 07:30 AM para a aula cód. PLAN-102 (Lab 2). Registro correspondente de transferência no outro laboratório: Almox-Lab2 às 07:40 AM.',
        time: 'há 2 horas',
        read: false
    },
    {
        id: 3,
        type: 'success',
        title: 'Boletim Enviado',
        message: 'O boletim de ocorrência DOC-2026-004 foi submetido com sucesso para a coordenação.',
        time: 'há 4 horas',
        read: false
    },
    {
        id: 4,
        type: 'info',
        title: 'Plano de Aula Aprovado',
        message: 'Seu plano de aula "Traçado de Molde Base da Saia Reta" foi revisado e aprovado.',
        time: 'há 1 dia',
        read: true
    }
];

// DOMContentLoaded Initializations
document.addEventListener('DOMContentLoaded', () => {
    // Setup Navigation Tabs
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const tabId = item.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // Populate Initial Renders
    renderLessonPlans();
    renderNotifications();
    updateDashboardStats();

    // Auto-calculate difference in Boletim Form
    const inputPrevista = document.getElementById('boletim-qtd-prevista');
    const inputEncontrada = document.getElementById('boletim-qtd-encontrada');
    const inputDiferenca = document.getElementById('boletim-qtd-diferenca');

    const calculateDiff = () => {
        const prev = parseInt(inputPrevista.value) || 0;
        const enc = parseInt(inputEncontrada.value) || 0;
        inputDiferenca.value = Math.abs(prev - enc);
    };
    inputPrevista.addEventListener('input', calculateDiff);
    inputEncontrada.addEventListener('input', calculateDiff);

    // Wire up forms
    document.getElementById('boletim-form').addEventListener('submit', handleBoletimSubmit);
    document.getElementById('cadastro-form').addEventListener('submit', handleCadastroSubmit);
    document.getElementById('form-add-product').addEventListener('submit', handleAddProductSubmit);
    document.getElementById('form-add-plano').addEventListener('submit', handleAddPlanoSubmit);
    document.getElementById('form-transfer-product').addEventListener('submit', handleTransferSubmit);

    // Initial Date inputs default to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('boletim-data').value = today;
    document.getElementById('plano-data-input').value = today;
});

// SPA Tab Switching Logic
function switchTab(tabId) {
    // Deactivate previous active menu
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    // Activate target menu
    const targetMenuItem = document.querySelector(`.nav-item[data-tab="${tabId}"]`);
    if (targetMenuItem) {
        targetMenuItem.classList.add('active');
    }

    // Toggle View Sections
    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
    const targetSection = document.getElementById(tabId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Update Top Header Title
    const headerTitle = document.getElementById('page-current-title');
    const pageTitles = {
        'inicio': 'Início',
        'aba-geral': 'Visão Geral do Painel',
        'almoxarifado': 'Gestão de Almoxarifados',
        'boletim': 'Boletim de Denúncia',
        'cadastro': 'Cadastro de Usuário',
        'guia-organizacao': 'Guia de Organização 5S',
        'notificacao': 'Notificações do Sistema',
        'plano-aula': 'Planos de Aula'
    };
    headerTitle.textContent = pageTitles[tabId] || 'SENAIVEST';
    currentTab = tabId;

    // Reset Almoxarifado views if switching tabs
    if (tabId !== 'almoxarifado') {
        backToAlmoxSelector();
    }
}

// ALMOXARIFADO NAVIGATION LOGIC
function openLab(labId) {
    currentLab = labId;
    
    // Hide Lab selection layout, show Grid Inventory layout
    document.getElementById('almox-selector-view').style.display = 'none';
    const inventoryView = document.getElementById('almox-inventory-view');
    inventoryView.style.display = 'block';

    // Update Lab Title header
    document.getElementById('inventory-lab-title').textContent = `ALMOXARIFADO LAB ${labId}`;
    
    // Render the grid items
    renderInventory();
}

function backToAlmoxSelector() {
    currentLab = null;
    document.getElementById('almox-inventory-view').style.display = 'none';
    document.getElementById('almox-selector-view').style.display = 'flex';
}

// RENDER INVENTORY ITEMS
function renderInventory() {
    if (!currentLab) return;

    const categories = ['ferramentas', 'tecidos', 'moldes'];
    
    categories.forEach(cat => {
        const gridElement = document.getElementById(`grid-${cat}`);
        gridElement.innerHTML = ''; // clear grid

        // Filter inventory for this lab & category
        const items = inventory.filter(item => item.lab === currentLab && item.category === cat);
        
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'item-card';
            
            // Status CSS class binding
            let statusClass = 'status-pertencente';
            if (item.status === 'Não Pertencente') statusClass = 'status-naopertencente';
            if (item.status === 'Não apresenta no estoque') statusClass = 'status-falta';

            card.innerHTML = `
                <div class="item-img-box">
                    <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 4rem; background: ${item.bgGradient || '#f0f0f0'}; border-radius: 4px; color: #fff;">
                        ${item.emoji || '📦'}
                    </div>
                </div>
                <div class="item-info">
                    <h3 class="item-title">${item.quantity} ${item.name}</h3>
                    <div class="item-meta">Localização: ${item.location}</div>
                    <div class="item-meta">${item.meta}</div>
                    <div class="card-action-row">
                        <div class="item-status ${statusClass}">${item.status}</div>
                        <button class="btn-card-transfer" onclick="openTransferModal(${item.id})">Transferir</button>
                    </div>
                </div>
            `;
            gridElement.appendChild(card);
        });

        // Add special dashed button to the "Ferramentas" column to register new item
        if (cat === 'ferramentas') {
            const addCard = document.createElement('div');
            addCard.className = 'btn-add-product-card';
            addCard.onclick = () => openNewProductModal(currentLab);
            addCard.innerHTML = `
                <div class="add-circle-icon">+</div>
                <span>Adicionar Novo Produto</span>
            `;
            gridElement.appendChild(addCard);
        }
    });
}

// MODAL CONTROLS
function openNewProductModal(labId) {
    document.getElementById('add-product-lab-id').value = labId;
    document.getElementById('modal-add-product-title').textContent = `Cadastrar Novo Item no Lab ${labId}`;
    
    // Clear previous inputs
    document.getElementById('prod-nome').value = '';
    document.getElementById('prod-quantidade').value = '';
    document.getElementById('prod-localizacao').value = '';
    document.getElementById('prod-responsavel').value = '';
    document.getElementById('prod-categoria').value = 'ferramentas';
    document.getElementById('prod-status').value = 'Pertencente';

    document.getElementById('modal-add-product').classList.add('active');
}

let tempPlanoMaterials = [];

function openNewPlanoModal() {
    document.getElementById('plano-curso-input').value = '';
    document.getElementById('plano-tema-input').value = '';
    document.getElementById('plano-objetivos-input').value = '';
    
    // Reset temporary list
    tempPlanoMaterials = [];
    populatePlanoMaterialSelect();
    renderTempMaterials();

    document.getElementById('modal-add-plano').classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// OPEN TRANSFER MODAL
function openTransferModal(itemId) {
    const item = inventory.find(i => i.id === itemId);
    if (!item) return;

    document.getElementById('trans-product-id').value = item.id;
    document.getElementById('trans-product-nome').value = `${item.quantity} ${item.name}`;
    document.getElementById('trans-quantidade').value = item.quantity;
    
    // Setup destination dropdown to exclude current lab
    const selectDest = document.getElementById('trans-destino');
    selectDest.innerHTML = '';
    
    for (let i = 1; i <= 3; i++) {
        if (i !== item.lab) {
            const opt = document.createElement('option');
            opt.value = i;
            opt.textContent = `Almoxarifado Lab ${i}`;
            selectDest.appendChild(opt);
        }
    }

    document.getElementById('modal-transfer-product').classList.add('active');
}

// HANDLE TRANSFER SUBMISSION
function handleTransferSubmit(e) {
    e.preventDefault();
    
    const itemId = parseInt(document.getElementById('trans-product-id').value);
    const professor = document.getElementById('trans-professor').value;
    const destLab = parseInt(document.getElementById('trans-destino').value);
    const quantityText = document.getElementById('trans-quantidade').value.trim();
    
    const itemIndex = inventory.findIndex(i => i.id === itemId);
    if (itemIndex === -1) return;
    
    const item = inventory[itemIndex];
    const sourceLab = item.lab;
    const nowTime = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    
    // Transfer logic:
    // Change item's lab to destination lab, update metadata and status
    item.lab = destLab;
    item.meta = `Horário: ${nowTime} | Transferido do Lab ${sourceLab} | Responsável: ${professor}`;
    item.status = 'Pertencente'; // since it's now in the new lab

    // Add activity log to dashboard
    addActivityLog(`${professor} transferiu ${quantityText} ${item.name} para o Lab ${destLab}`);
    
    // Add warning/info notification with tracking info
    addNotification('info', `Transferência de Material`, `Material ${quantityText} ${item.name} transferido do Almoxarifado Lab ${sourceLab} para o Lab ${destLab} pelo(a) Prof(a). ${professor} às ${nowTime}.`);
    
    // Close modal, re-render, update stats and show toast
    closeModal('modal-transfer-product');
    renderInventory();
    updateDashboardStats();
    showToast('Material transferido com sucesso!', 'success');
}

// HANDLE PRODUCT SUBMISSION
function handleAddProductSubmit(e) {
    e.preventDefault();
    const labId = parseInt(document.getElementById('add-product-lab-id').value);
    const name = document.getElementById('prod-nome').value.trim();
    const category = document.getElementById('prod-categoria').value;
    const quantity = document.getElementById('prod-quantidade').value.trim();
    const location = document.getElementById('prod-localizacao').value.trim();
    const responsavel = document.getElementById('prod-responsavel').value.trim();
    const status = document.getElementById('prod-status').value;

    // Determine category emoji and gradients
    let emoji = '📦';
    let bgGradient = 'linear-gradient(135deg, #74ebd5, #9face6)';
    if (category === 'tecidos') {
        emoji = '👕';
        bgGradient = 'linear-gradient(135deg, #2575fc, #6a11cb)';
    } else if (category === 'moldes') {
        emoji = '📜';
        bgGradient = 'linear-gradient(135deg, #f39c12, #f1c40f)';
    }

    const newItem = {
        id: inventory.length + 1,
        lab: labId,
        category,
        name,
        quantity,
        location,
        meta: `Horário de entrada: ${new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })} | Responsável: ${responsavel}`,
        status,
        emoji,
        bgGradient
    };

    inventory.push(newItem);
    
    // Add new activity log to dashboard
    addActivityLog(`${responsavel} adicionou ${quantity} ${name} no Lab ${labId}`);
    
    // Trigger notification
    addNotification('info', `Novo item adicionado`, `${quantity} ${name} cadastrado no Almoxarifado Lab ${labId}.`);

    renderInventory();
    updateDashboardStats();
    closeModal('modal-add-product');
    showToast('Produto cadastrado com sucesso!', 'success');
}

// HANDLE BOLETIM SUBMISSION
function handleBoletimSubmit(e) {
    e.preventDefault();
    const codigo = document.getElementById('boletim-codigo').value || 'DOC-UNNAMED';
    const material = document.getElementById('boletim-material-nome').value;
    const prof = document.getElementById('boletim-professor').value || 'Docente';
    
    // Add activity log to dashboard
    addActivityLog(`Boletim de Ocorrência ${codigo} enviado por ${prof}`);
    
    // Trigger warning notification in system
    addNotification('warning', `Alerta de Ocorrência: ${material}`, `Boletim ${codigo} registrado para o material "${material}".`);

    showToast('Boletim de Ocorrência enviado com sucesso!', 'success');
    
    // Reset form fields
    document.getElementById('boletim-form').reset();
    document.getElementById('boletim-data').value = new Date().toISOString().split('T')[0];
    updateDashboardStats();
    
    // Redirect to General view to check stats update
    setTimeout(() => {
        switchTab('aba-geral');
    }, 1000);
}

// HANDLE CADASTRO SUBMISSION
function handleCadastroSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('cad-email').value;
    const nome = document.getElementById('cad-nome').value;
    const senha = document.getElementById('cad-senha').value;

    // Basic password validation
    const hasMinLength = senha.length >= 8;
    const hasUpper = /[A-Z]/.test(senha);
    const hasLower = /[a-z]/.test(senha);
    const hasNumber = /[0-9]/.test(senha);

    if (!hasMinLength || !hasUpper || !hasLower || !hasNumber) {
        showToast('Senha inválida! Verifique os critérios mínimos de segurança.', 'error');
        return;
    }

    addActivityLog(`Novo usuário cadastrado: ${nome}`);
    addNotification('success', `Novo cadastro realizado`, `Usuário ${nome} (${email}) foi registrado no portal.`);

    showToast('Cadastro realizado com sucesso!', 'success');
    
    document.getElementById('cadastro-form').reset();
    updateDashboardStats();

    setTimeout(() => {
        switchTab('aba-geral');
    }, 1000);
}

// HANDLE LESSON PLAN SUBMISSION
function handleAddPlanoSubmit(e) {
    e.preventDefault();
    
    const date = document.getElementById('plano-data-input').value;
    const course = document.getElementById('plano-curso-input').value.trim();
    const topic = document.getElementById('plano-tema-input').value.trim();
    const objectives = document.getElementById('plano-objetivos-input').value.trim();

    if (tempPlanoMaterials.length === 0) {
        showToast('Adicione pelo menos um material à Ficha de Controle!', 'error');
        return;
    }

    const newPlano = {
        id: lessonPlans.length + 1,
        date,
        course,
        topic,
        objectives,
        resources: [...tempPlanoMaterials] // clone array
    };

    lessonPlans.push(newPlano);
    
    addActivityLog(`Novo plano cadastrado para a turma: ${course}`);
    renderLessonPlans();
    updateDashboardStats();
    closeModal('modal-add-plano');
    showToast('Plano de aula e Ficha de Controle salvos!', 'success');
}

function renderLessonPlans() {
    const tableBody = document.getElementById('plano-aula-table-body');
    if (!tableBody) return;
    tableBody.innerHTML = '';

    lessonPlans.forEach(plano => {
        // Format Date
        let dateObj = new Date(plano.date);
        let formattedDate = plano.date;
        if (!isNaN(dateObj.getTime())) {
            formattedDate = dateObj.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
        }

        // Format resources summary badges
        let resourcesHtml = '';
        if (Array.isArray(plano.resources)) {
            resourcesHtml = plano.resources.map(r => 
                `<span style="display:inline-block; background:#222; border: 1px solid var(--border-color); padding:3px 8px; border-radius:12px; font-size:0.75rem; margin:2px; color:#f5efe6;">
                    ${r.name} <strong style="color:var(--primary-beige);">(Lab ${r.lab})</strong>
                </span>`
            ).join('');
        }

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${formattedDate}</td>
            <td><strong>${plano.course}</strong></td>
            <td>${plano.topic}</td>
            <td>${plano.objectives}</td>
            <td><div style="max-width:320px; display:flex; flex-wrap:wrap;">${resourcesHtml}</div></td>
            <td class="plano-actions">
                <button class="btn-table-action" onclick="openPlanoDetailsModal(${plano.id})" title="Ver Ficha de Controle" style="margin-right:8px;">👁️</button>
                <button class="btn-table-action delete" onclick="deleteLessonPlan(${plano.id})" title="Excluir">🗑️</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function deleteLessonPlan(id) {
    if (confirm('Tem certeza que deseja excluir este plano de aula?')) {
        lessonPlans = lessonPlans.filter(p => p.id !== id);
        renderLessonPlans();
        updateDashboardStats();
        showToast('Plano de aula removido.', 'success');
    }
}

// PLANO MATERIALS FORM HELPERS
function populatePlanoMaterialSelect() {
    const select = document.getElementById('plano-material-select');
    if (!select) return;
    select.innerHTML = '';
    
    // Sort items by lab then name
    const sorted = [...inventory].sort((a,b) => a.lab - b.lab || a.name.localeCompare(b.name));
    
    sorted.forEach(item => {
        const opt = document.createElement('option');
        opt.value = item.id;
        opt.textContent = `${item.name} (Almoxarifado Lab ${item.lab})`;
        select.appendChild(opt);
    });
}

function addMaterialToPlanoForm() {
    const select = document.getElementById('plano-material-select');
    if (!select) return;
    
    const itemId = parseInt(select.value);
    const item = inventory.find(i => i.id === itemId);
    if (!item) return;

    // Check if already in list
    if (tempPlanoMaterials.some(m => m.id === itemId)) {
        showToast('Este material já foi adicionado!', 'error');
        return;
    }

    tempPlanoMaterials.push({
        id: item.id,
        name: item.name,
        lab: item.lab,
        quantity: '1' // default
    });

    renderTempMaterials();
}

function removeTempMaterial(itemId) {
    tempPlanoMaterials = tempPlanoMaterials.filter(m => m.id !== itemId);
    renderTempMaterials();
}

function renderTempMaterials() {
    const tbody = document.getElementById('plano-form-recursos-body');
    if (!tbody) return;
    tbody.innerHTML = '';

    if (tempPlanoMaterials.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" style="text-align:center; color:#888; padding:15px;">Nenhum material adicionado ainda.</td></tr>';
        return;
    }

    tempPlanoMaterials.forEach(m => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${m.name}</td>
            <td><strong>Lab ${m.lab}</strong></td>
            <td>
                <input type="text" value="${m.quantity}" 
                       onchange="updateTempQty(${m.id}, this.value)" 
                       style="width: 60px; text-align: center; border: 1px solid var(--border-color); background: var(--bg-dark); color:#fff; border-radius:4px; padding:2px;">
            </td>
            <td>
                <button type="button" class="btn-table-action delete" onclick="removeTempMaterial(${m.id})">🗑️</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function updateTempQty(itemId, val) {
    const mat = tempPlanoMaterials.find(m => m.id === itemId);
    if (mat) {
        mat.quantity = val.trim();
    }
}

// VIEW PLAN DETAILS & CONTROL SHEET
function openPlanoDetailsModal(planoId) {
    const plano = lessonPlans.find(p => p.id === planoId);
    if (!plano) return;

    // Format Date
    let dateObj = new Date(plano.date);
    let formattedDate = plano.date;
    if (!isNaN(dateObj.getTime())) {
        formattedDate = dateObj.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
    }

    document.getElementById('view-plano-curso').textContent = plano.course;
    document.getElementById('view-plano-tema').textContent = plano.topic;
    document.getElementById('view-plano-data').textContent = formattedDate;
    document.getElementById('view-plano-objetivos').textContent = plano.objectives;

    // Render materials table
    const tbody = document.getElementById('view-plano-recursos-body');
    tbody.innerHTML = '';

    if (!Array.isArray(plano.resources) || plano.resources.length === 0) {
        tbody.innerHTML = '<tr><td colspan="3" style="text-align:center; padding:15px; color:#888;">Nenhum recurso associado.</td></tr>';
    } else {
        plano.resources.forEach(r => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${r.name}</td>
                <td><strong style="color:var(--primary-beige);">Almoxarifado Lab ${r.lab}</strong></td>
                <td>${r.quantity}</td>
            `;
            tbody.appendChild(tr);
        });
    }

    document.getElementById('modal-view-plano-detalhes').classList.add('active');
}

// RENDER & FILTER NOTIFICATIONS
let notifFilter = 'all';

function filterNotifications(filter) {
    notifFilter = filter;
    document.querySelectorAll('.notif-filters .btn-filter').forEach(btn => btn.classList.remove('active'));
    
    // Find active element
    let targetIndex = 0;
    if (filter === 'unread') targetIndex = 1;
    if (filter === 'read') targetIndex = 2;
    document.querySelectorAll('.notif-filters .btn-filter')[targetIndex].classList.add('active');

    renderNotifications();
}

function renderNotifications() {
    const notifContainer = document.getElementById('notifications-list-container');
    notifContainer.innerHTML = '';

    let filtered = notifications;
    if (notifFilter === 'unread') filtered = notifications.filter(n => !n.read);
    if (notifFilter === 'read') filtered = notifications.filter(n => n.read);

    if (filtered.length === 0) {
        notifContainer.innerHTML = '<div style="text-align:center; padding:30px; color:#888;">Nenhuma notificação encontrada.</div>';
        return;
    }

    filtered.forEach(n => {
        const item = document.createElement('div');
        item.className = `notif-item ${n.type} ${!n.read ? 'unread' : ''}`;
        
        let emoji = '🔔';
        if (n.type === 'warning') emoji = '⚠️';
        if (n.type === 'success') emoji = '✅';
        if (n.type === 'info') emoji = 'ℹ️';

        item.innerHTML = `
            <div class="notif-icon-box">${emoji}</div>
            <div class="notif-body">
                <div class="notif-title">${n.title}</div>
                <div class="notif-message">${n.message}</div>
                <div class="notif-time">${n.time}</div>
            </div>
            <div class="notif-actions">
                ${!n.read ? `<button class="btn-notif-action" onclick="markNotificationRead(${n.id})" title="Marcar como lida">👁️</button>` : ''}
                <button class="btn-notif-action" onclick="deleteNotification(${n.id})" title="Excluir">🗑️</button>
            </div>
        `;
        notifContainer.appendChild(item);
    });
}

function markNotificationRead(id) {
    const notif = notifications.find(n => n.id === id);
    if (notif) {
        notif.read = true;
        renderNotifications();
        updateDashboardStats();
    }
}

function deleteNotification(id) {
    notifications = notifications.filter(n => n.id !== id);
    renderNotifications();
    updateDashboardStats();
    showToast('Notificação excluída.', 'success');
}

function addNotification(type, title, message) {
    const newNotif = {
        id: notifications.length + 1,
        type,
        title,
        message,
        time: 'Agora',
        read: false
    };
    notifications.unshift(newNotif);
    renderNotifications();
    updateDashboardStats();
}

// DASHBOARD STATS CALCULATOR
function updateDashboardStats() {
    // Total items across all labs
    document.getElementById('stats-total-items').textContent = inventory.length;

    // Unread notification count
    const unreadCount = notifications.filter(n => !n.read).length;
    document.getElementById('stats-total-alerts').textContent = unreadCount;
    
    // Add visual badge counter next to Bell menu icon on sidebar
    const notifLink = document.getElementById('nav-notif-link');
    const existingBadge = notifLink.querySelector('.notif-badge');
    if (existingBadge) {
        existingBadge.remove();
    }
    
    if (unreadCount > 0) {
        const badge = document.createElement('span');
        badge.className = 'notif-badge';
        badge.style.cssText = 'background:#c0392b; color:#fff; border-radius:50%; font-size:0.75rem; padding:2px 6px; font-weight:700; margin-left:auto;';
        badge.textContent = unreadCount;
        notifLink.appendChild(badge);
    }

    // Total lesson plans count
    document.getElementById('stats-total-planos').textContent = lessonPlans.length;

    // Total reports count (approximated by notifications warning count)
    const reportCount = notifications.filter(n => n.type === 'warning').length;
    document.getElementById('stats-total-boletins').textContent = reportCount;
}

// DASHBOARD LOG GENERATOR
function addActivityLog(text) {
    const list = document.getElementById('dashboard-activity-list');
    const logItem = document.createElement('li');
    logItem.className = 'activity-item';
    logItem.innerHTML = `
        <span class="activity-text">${text}</span>
        <span class="activity-time">Agora</span>
    `;
    list.insertBefore(logItem, list.firstChild);
    
    // Cap log list at 5 items
    if (list.children.length > 5) {
        list.removeChild(list.lastChild);
    }
}

// TOAST NOTIFICATIONS
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let emoji = '✅';
    if (type === 'error') emoji = '❌';
    if (type === 'info') emoji = 'ℹ️';

    toast.innerHTML = `
        <div style="font-size: 1.2rem;">${emoji}</div>
        <div class="toast-message">${message}</div>
    `;
    container.appendChild(toast);

    // Fade away animation and garbage collector
    setTimeout(() => {
        toast.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            toast.remove();
        }, 500);
    }, 3000);
}
