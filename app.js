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

    // Sidebar Toggle Event Listeners
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const toggleBtn = document.getElementById('menu-toggle-btn');
    const closeBtn = document.getElementById('close-sidebar-btn');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.add('active');
            sidebarOverlay.classList.add('active');
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
        });
    }

    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
        });
    }

    // Check registration state
    const regOverlay = document.getElementById('register-fullscreen-overlay');
    const registeredUser = localStorage.getItem('registeredUser');

    if (!registeredUser) {
        regOverlay.style.display = 'flex';
    } else {
        regOverlay.style.display = 'none';
        const user = JSON.parse(registeredUser);
        updateUserUI(user);
        if (user.customAvatar) {
            updateFormChoices(user.customAvatar);
        }
    }

    // Handle Forced Registration Form
    const firstRegForm = document.getElementById('first-register-form');
    if (firstRegForm) {
        firstRegForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nome = document.getElementById('first-reg-nome').value.trim();
            const email = document.getElementById('first-reg-email').value.trim();
            const senha = document.getElementById('first-reg-senha').value;

            // Password validation
            const hasMinLength = senha.length >= 8;
            const hasUpper = /[A-Z]/.test(senha);
            const hasLower = /[a-z]/.test(senha);
            const hasNumber = /[0-9]/.test(senha);

            if (!hasMinLength || !hasUpper || !hasLower || !hasNumber) {
                showToast('Senha inválida! Mínimo de 8 caracteres, contendo maiúsculas, minúsculas e número.', 'error');
                return;
            }

            const newUser = {
                name: nome,
                email: email,
                role: 'Administrador(a)',
                avatarType: 'custom',
                customAvatar: {
                    bgColor: '#2c3e50',
                    hair: 'ondulado',
                    eyes: 'classico',
                    mouth: 'amigavel'
                }
            };

            localStorage.setItem('registeredUser', JSON.stringify(newUser));
            updateUserUI(newUser);
            
            // Hide registration screen with animation
            regOverlay.style.transition = 'opacity 0.5s ease-out';
            regOverlay.style.opacity = '0';
            setTimeout(() => {
                regOverlay.style.display = 'none';
            }, 500);

            showToast('Cadastro realizado com sucesso!', 'success');

            // Redirect to Perfil
            setTimeout(() => {
                switchTab('perfil');
            }, 600);
        });
    }

    // Set up live preview change events for avatar editor
    const customizationForm = document.getElementById('avatar-customize-form');
    if (customizationForm) {
        customizationForm.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.addEventListener('change', () => {
                updateLivePreview();
            });
        });

        // Handle avatar customizer form submission
        customizationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const registeredUser = localStorage.getItem('registeredUser');
            if (registeredUser) {
                const user = JSON.parse(registeredUser);
                user.avatarType = 'custom';
                user.customAvatar = getFormAvatarData();
                localStorage.setItem('registeredUser', JSON.stringify(user));
                updateUserUI(user);
                
                showToast('Avatar personalizado salvo!', 'success');
            }
        });
    }

    // File upload logic
    const fileInput = document.getElementById('avatar-file-input');
    const uploadArea = document.getElementById('avatar-upload-area');

    if (fileInput) {
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                handleAvatarFile(file);
            }
        });
    }

    if (uploadArea) {
        ['dragenter', 'dragover'].forEach(eventName => {
            uploadArea.addEventListener(eventName, (e) => {
                e.preventDefault();
                uploadArea.classList.add('dragover');
            }, false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
            uploadArea.addEventListener(eventName, (e) => {
                e.preventDefault();
                uploadArea.classList.remove('dragover');
            }, false);
        });

        uploadArea.addEventListener('drop', (e) => {
            const dt = e.dataTransfer;
            const file = dt.files[0];
            if (file && file.type.startsWith('image/')) {
                handleAvatarFile(file);
            }
        });
    }

    function handleAvatarFile(file) {
        if (file.size > 1024 * 1024) {
            showToast('Arquivo muito grande! O limite é de 1MB.', 'error');
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            const base64Data = event.target.result;
            const registeredUser = localStorage.getItem('registeredUser');
            if (registeredUser) {
                const user = JSON.parse(registeredUser);
                user.avatarType = 'uploaded';
                user.avatarData = base64Data;
                localStorage.setItem('registeredUser', JSON.stringify(user));
                
                updateUserUI(user);
                showToast('Foto da galeria carregada com sucesso!', 'success');
            }
        };
        reader.readAsDataURL(file);
    }

    // Reset avatar button
    const btnResetAvatar = document.getElementById('btn-reset-avatar');
    if (btnResetAvatar) {
        btnResetAvatar.addEventListener('click', () => {
            const registeredUser = localStorage.getItem('registeredUser');
            if (registeredUser) {
                const user = JSON.parse(registeredUser);
                user.avatarType = 'custom';
                user.avatarData = '';
                localStorage.setItem('registeredUser', JSON.stringify(user));
                
                updateUserUI(user);
                updateFormChoices(user.customAvatar);
                showToast('Foto personalizada removida. Avatar restaurado.', 'success');
            }
        });
    }

    // Populate Initial Renders
    renderLessonPlans();
    renderNotifications();
    updateDashboardStats();
    renderRegisteredBoletins();
    setupNextBoletimCode();

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
    document.getElementById('form-add-product').addEventListener('submit', handleAddProductSubmit);
    document.getElementById('form-add-plano').addEventListener('submit', handleAddPlanoSubmit);
    document.getElementById('form-transfer-product').addEventListener('submit', handleTransferSubmit);

    // Initial Date inputs default to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('boletim-data').value = today;
    document.getElementById('plano-data-input').value = today;

    // Initialize Estela Chatbot
    initEstelaChatbot();
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
        'perfil': 'Perfil do Usuário',
        'guia-organizacao': 'Guia de Organização 5S',
        'notificacao': 'Notificações do Sistema',
        'plano-aula': 'Planos de Aula'
    };
    headerTitle.textContent = pageTitles[tabId] || 'SENAIVEST';
    currentTab = tabId;

    // Close sidebar on navigation
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    if (sidebar && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
    }

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
    
    // Auto generate plano code
    setupNextPlanoCode();

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
    const data = document.getElementById('boletim-data').value;
    const curso = document.getElementById('boletim-curso').value;
    const prof = document.getElementById('boletim-professor').value || 'Docente';
    const material = document.getElementById('boletim-material-nome').value;
    
    // Handle tipo radio
    const tipoRadio = document.querySelector('input[name="boletim-tipo"]:checked');
    let tipo = tipoRadio ? tipoRadio.value : 'Outro';
    if (tipo === 'Outro') {
        const outroTexto = document.getElementById('boletim-tipo-outro-texto').value.trim();
        if (outroTexto) tipo = outroTexto;
    }
    
    const planoCodigo = document.getElementById('boletim-plano-codigo').value;
    const origem = document.getElementById('boletim-origem').value;
    const descricao = document.getElementById('boletim-descricao').value;
    
    // Handle situacao checkboxes
    const situacoesChecked = [];
    document.querySelectorAll('input[name="boletim-situacao"]:checked').forEach(cb => {
        if (cb.value === 'Outro') {
            const outroTexto = document.getElementById('boletim-situacao-outro').value.trim();
            if (outroTexto) {
                situacoesChecked.push(outroTexto);
            } else {
                situacoesChecked.push('Outro');
            }
        } else {
            situacoesChecked.push(cb.value);
        }
    });
    const situacao = situacoesChecked.join(', ');
    
    const qtdPrevista = document.getElementById('boletim-qtd-prevista').value;
    const qtdEncontrada = document.getElementById('boletim-qtd-encontrada').value;
    const qtdDiferenca = document.getElementById('boletim-qtd-diferenca').value;
    const aluno = document.getElementById('boletim-aluno').value;
    
    // Observacao responsavel + observacoes gerais
    const obsResponsavel = document.getElementById('boletim-obs').value.trim();
    const obsGerais = document.getElementById('boletim-obs-gerais').value.trim();
    let observacoes = obsGerais;
    if (obsResponsavel) {
        observacoes = obsResponsavel + (obsGerais ? ' | ' + obsGerais : '');
    }
    
    // Handle medidas checkboxes
    const medidasChecked = [];
    document.querySelectorAll('input[name="boletim-medidas"]:checked').forEach(cb => {
        if (cb.value === 'Outro') {
            const outroTexto = document.getElementById('boletim-medida-outro').value.trim();
            if (outroTexto) {
                medidasChecked.push(outroTexto);
            } else {
                medidasChecked.push('Outro');
            }
        } else {
            medidasChecked.push(cb.value);
        }
    });
    const medidas = medidasChecked.join(', ');

    const newBoletim = {
        id: registeredBoletins.length + 1,
        code: codigo,
        date: data,
        curso: curso,
        professor: prof,
        material: material,
        tipo: tipo,
        planoCodigo: planoCodigo,
        origem: origem,
        descricao: descricao,
        situacao: situacao || 'Nenhuma especificada',
        qtdPrevista: qtdPrevista,
        qtdEncontrada: qtdEncontrada,
        qtdDiferenca: qtdDiferenca,
        aluno: aluno || 'Não identificado',
        observacoes: observacoes || 'Nenhuma',
        medidas: medidas || 'Nenhuma registrada',
        status: 'Registrado'
    };

    registeredBoletins.push(newBoletim);
    localStorage.setItem('registeredBoletins', JSON.stringify(registeredBoletins));

    // Add activity log to dashboard
    addActivityLog(`Boletim de Ocorrência ${codigo} enviado por ${prof}`);
    
    // Trigger warning notification in system
    addNotification('warning', `Alerta de Ocorrência: ${material}`, `Boletim ${codigo} registrado para o material "${material}".`);

    showToast('Boletim de Ocorrência enviado com sucesso!', 'success');
    
    // Render the updated list
    renderRegisteredBoletins();

    // Reset form fields
    document.getElementById('boletim-form').reset();
    document.getElementById('boletim-data').value = new Date().toISOString().split('T')[0];
    
    // Auto generate next code
    setupNextBoletimCode();
    
    updateDashboardStats();
    
    // Redirect to registered reports tab
    setTimeout(() => {
        switchTab('boletins-registrados');
    }, 1000);
}

// HANDLE LESSON PLAN SUBMISSION
function handleAddPlanoSubmit(e) {
    e.preventDefault();
    
    const code = document.getElementById('plano-codigo-input').value;
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
        code,
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

        const planCode = plano.code || `PLAN-${500 + plano.id}`;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${formattedDate}</td>
            <td>
                <span style="font-size:0.75rem; background:#1f1f1f; padding:2px 6px; border-radius:4px; border:1px solid var(--border-color); color:var(--primary-beige); margin-bottom:4px; display:inline-block;">${planCode}</span><br>
                <strong>${plano.course}</strong>
            </td>
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

// --- USER SESSION AND AVATAR CUSTOMIZER BEHAVIORS ---

// Generate custom SVG string for avatar based on choices
function generateAvatarSVG(custom) {
    const bgColor = custom.bgColor || '#2c3e50';
    const hair = custom.hair || 'ondulado';
    const eyes = custom.eyes || 'classico';
    const mouth = custom.mouth || 'amigavel';
    const skinColor = '#fed5b2';

    let hairSvg = '';
    if (hair === 'ondulado') {
        hairSvg = `<path d="M30 40c-2-8 3-15 15-18c15-4 22 5 24 12c1 3 0 10-2 12c-2-3-5-2-7-5c-2 6-8 7-11 4c-3 5-8 5-11 0c-2 4-5 3-8-5z" fill="#3e2723"/>`;
    } else if (hair === 'curto') {
        hairSvg = `<path d="M32 38c0-8 6-12 18-12s18 4 18 12c0-3-4-5-8-5c-4 0-6 2-10 2s-6-2-10-2c-4 0-8 2-8 5z" fill="#2c3e50"/>`;
    } else if (hair === 'preso') {
        hairSvg = `
            <circle cx="50" cy="22" r="7" fill="#d35400"/>
            <path d="M32 40c0-10 8-15 18-15s18 5 18 15c-3-5-8-6-18-6s-15 1-18 6z" fill="#d35400"/>
        `;
    } else if (hair === 'bone') {
        hairSvg = `
            <path d="M30 35c3-10 12-11 20-11s17 1 20 11H30z" fill="#005CA9"/>
            <path d="M45 35c10-2 20 0 25 3c5 3 2 4-5 4H45z" fill="#002d62"/>
        `;
    }

    let eyesSvg = '';
    if (eyes === 'alegre') {
        eyesSvg = `<path d="M41 43c1-2 4-2 5 0M54 43c1-2 4-2 5 0" stroke="#000" stroke-width="2" stroke-linecap="round" fill="none"/>`;
    } else if (eyes === 'escuros') {
        eyesSvg = `
            <path d="M36 41h28v4c0 3-3 6-6 6h-2c-2 0-4-2-4-4c0 2-2 4-4 4h-2c-3 0-6-3-6-6v-4z" fill="#111"/>
            <path d="M36 41h28" stroke="#111" stroke-width="2"/>
        `;
    } else if (eyes === 'grau') {
        eyesSvg = `
            <circle cx="43" cy="44" r="5" stroke="#d3bca2" stroke-width="2" fill="none"/>
            <circle cx="57" cy="44" r="5" stroke="#d3bca2" stroke-width="2" fill="none"/>
            <line x1="48" y1="44" x2="52" y2="44" stroke="#d3bca2" stroke-width="2"/>
            <path d="M42 44h2M56 44h2" stroke="#000" stroke-width="1.5" stroke-linecap="round"/>
        `;
    } else if (eyes === 'classico') {
        eyesSvg = `
            <circle cx="43" cy="44" r="2" fill="#000"/>
            <circle cx="57" cy="44" r="2" fill="#000"/>
        `;
    }

    let mouthSvg = '';
    if (mouth === 'aberto') {
        mouthSvg = `<path d="M42 52c0 5 4 8 8 8s8-3 8-8H42z" fill="#c0392b"/>`;
    } else if (mouth === 'amigavel') {
        mouthSvg = `<path d="M44 53q6 4 12 0" stroke="#000" stroke-width="2" stroke-linecap="round" fill="none"/>`;
    } else if (mouth === 'neutro') {
        mouthSvg = `<line x1="44" y1="54" x2="56" y2="54" stroke="#000" stroke-width="2" stroke-linecap="round"/>`;
    }

    return `
        <svg class="profile-img" viewBox="0 0 100 100" style="background:${bgColor}; display:block; width:100%; height:100%;">
            <circle cx="50" cy="46" r="18" fill="${skinColor}"/>
            <path d="M20 90c0-15 12-25 30-25s30 10 30 25v10H20z" fill="#34495e"/>
            ${hairSvg}
            ${eyesSvg}
            ${mouthSvg}
        </svg>
    `;
}

// Update avatar in all containers
function updateUserAvatar(user) {
    const sidebarAvatarContainer = document.getElementById('sidebar-profile-img-container');
    const headerAvatarContainer = document.getElementById('header-user-avatar-container');
    const profileAvatarContainer = document.getElementById('profile-preview-avatar-container');
    
    let avatarHtml = '';
    if (user.avatarType === 'uploaded' && user.avatarData) {
        avatarHtml = `<img src="${user.avatarData}" class="profile-img" alt="Avatar">`;
    } else {
        const custom = user.customAvatar || {
            bgColor: '#2c3e50',
            hair: 'ondulado',
            eyes: 'classico',
            mouth: 'amigavel'
        };
        avatarHtml = generateAvatarSVG(custom);
    }

    if (sidebarAvatarContainer) sidebarAvatarContainer.innerHTML = avatarHtml;
    if (headerAvatarContainer) {
        headerAvatarContainer.innerHTML = avatarHtml;
        const imgEl = headerAvatarContainer.querySelector('img, svg');
        if (imgEl) {
            imgEl.className = 'header-user-avatar';
        }
    }
    if (profileAvatarContainer) profileAvatarContainer.innerHTML = avatarHtml;
}

// Update text details and avatar
function updateUserUI(user) {
    const sideName = document.getElementById('sidebar-profile-name');
    const headName = document.getElementById('header-user-name');
    const sideRole = document.getElementById('sidebar-profile-role');
    const profileNameDisplay = document.getElementById('profile-user-name-display');
    const profileEmailDisplay = document.getElementById('profile-user-email-display');

    if (sideName) sideName.textContent = user.name;
    if (headName) headName.textContent = user.name;
    if (sideRole) sideRole.textContent = user.role || 'Administrador(a)';
    if (profileNameDisplay) profileNameDisplay.textContent = user.name;
    if (profileEmailDisplay) profileEmailDisplay.textContent = user.email;

    const btnResetAvatar = document.getElementById('btn-reset-avatar');
    if (btnResetAvatar) {
        btnResetAvatar.style.display = user.avatarType === 'uploaded' ? 'block' : 'none';
    }

    updateUserAvatar(user);
}

// Select correct radio buttons on load
function updateFormChoices(custom) {
    if (!custom) return;
    
    const bgInput = document.querySelector(`input[name="avatar-bg"][value="${custom.bgColor}"]`);
    const hairInput = document.querySelector(`input[name="avatar-hair"][value="${custom.hair}"]`);
    const eyesInput = document.querySelector(`input[name="avatar-eyes"][value="${custom.eyes}"]`);
    const mouthInput = document.querySelector(`input[name="avatar-mouth"][value="${custom.mouth}"]`);

    if (bgInput) bgInput.checked = true;
    if (hairInput) hairInput.checked = true;
    if (eyesInput) eyesInput.checked = true;
    if (mouthInput) mouthInput.checked = true;
}

// Read current form choices
function getFormAvatarData() {
    const bg = document.querySelector('input[name="avatar-bg"]:checked').value;
    const hair = document.querySelector('input[name="avatar-hair"]:checked').value;
    const eyes = document.querySelector('input[name="avatar-eyes"]:checked').value;
    const mouth = document.querySelector('input[name="avatar-mouth"]:checked').value;
    return { bgColor: bg, hair, eyes, mouth };
}

// Update live preview SVG
function updateLivePreview() {
    const customData = getFormAvatarData();
    const svgHtml = generateAvatarSVG(customData);
    const container = document.getElementById('profile-preview-avatar-container');
    if (container) {
        container.innerHTML = svgHtml;
    }
}

// --- ESTELA VIRTUAL ASSISTANT LOGIC ---

function getEstelaResponse(query) {
    const q = query.toLowerCase();
    
    if (q.includes('olá') || q.includes('oi') || q.includes('estela') || q.includes('bom dia') || q.includes('boa tarde') || q.includes('boa noite') || q.includes('hello')) {
        return "Olá, querido(a) colega! Com a linha e agulha prontas, estou aqui para alinhavar qualquer dúvida que você tenha sobre a plataforma <strong>SENAIVEST</strong>. Pode perguntar!";
    }
    
    if (q.includes('almoxarifado') || q.includes('estoque') || q.includes('material') || q.includes('categoria') || q.includes('lab') || q.includes('ferramenta') || q.includes('tecido') || q.includes('molde')) {
        return "Nossos materiais estão divididos em 3 almoxarifados (Lab 1, Lab 2 e Lab 3). Acesse a aba <strong>Almoxarifado</strong>, selecione o laboratório e veja o catálogo separado por Ferramentas, Tecidos e Moldes. Você também pode transferir itens entre laboratórios clicando em <em>Transferir</em>!";
    }
    
    if (q.includes('boletim') || q.includes('ocorrência') || q.includes('denúncia') || q.includes('avaria') || q.includes('quebro') || q.includes('perda') || q.includes('registro') || q.includes('pasta') || q.includes('registrado')) {
        return "Para relatar agulhas quebradas, tecidos faltantes ou avarias, use a aba <strong>Boletim</strong>. O código do documento (`DOC-2026-XXX`) é gerado automaticamente! Ao enviar, o relatório será arquivado na pasta de <strong>Boletins Registrados</strong>, que você pode consultar a qualquer momento.";
    }
    
    if (q.includes('plano') || q.includes('aula') || q.includes('turma') || q.includes('ficha') || q.includes('gerenciador')) {
        return "No menu <strong>Plano de Aula</strong>, você pode criar planejamentos e associar insumos do estoque. O sistema gera um código de plano automático (`PLAN-XXX`) e cria uma Ficha de Controle de Materiais. Assim, tudo estará devidamente separado antes de iniciar as aulas!";
    }
    
    if (q.includes('avatar') || q.includes('perfil') || q.includes('foto') || q.includes('personalizar') || q.includes('imagem') || q.includes('galeria')) {
        return "Para ajustar sua foto ou avatar, vá no menu <strong>Perfil</strong>. Você tem duas opções: carregar uma foto real da sua galeria ou utilizar o painel interativo de personalização do avatar (onde pode mudar cor de fundo, cabelo, olhar e boca). Tudo atualiza na hora!";
    }
    
    if (q.includes('reciclar') || q.includes('meio ambiente') || q.includes('sustentabilidade') || q.includes('retalho') || q.includes('limpeza') || q.includes('organização') || q.includes('5s') || q.includes('lixo') || q.includes('coleta')) {
        return "O laboratório sustentável é o nosso forte! Na aba <strong>Guia de Organização</strong>, além das regras 5S para agulhas e máquinas, temos regras de reciclagem de tecidos (separar fibras naturais de sintéticas), descarte correto de moldes de papel kraft, encaixe inteligente e economia de energia nas máquinas industriais.";
    }
    
    return "Hm, essa dúvida ficou um pouco desalinhada nas minhas agulhas! Mas fique tranquilo(a): para mexer no estoque use a aba <strong>Almoxarifado</strong>; para denunciar danos use a aba <strong>Boletim</strong>; e para customizar seu visual use a aba <strong>Perfil</strong>. Se precisar, use um dos botões de sugestões rápidas!";
}

function initEstelaChatbot() {
    const toggleBtn = document.getElementById('assistant-toggle-btn');
    const chatWindow = document.getElementById('assistant-chat-window');
    const closeBtn = document.getElementById('assistant-chat-close');
    const chatForm = document.getElementById('assistant-chat-form');
    const chatInput = document.getElementById('assistant-chat-input');
    const chatMessages = document.getElementById('assistant-chat-messages');
    const suggestionsContainer = document.getElementById('assistant-suggestions');

    if (!toggleBtn || !chatWindow) return;

    toggleBtn.addEventListener('click', () => {
        chatWindow.classList.toggle('active');
        chatMessages.scrollTop = chatMessages.scrollHeight;
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            chatWindow.classList.remove('active');
        });
    }

    function appendMessage(text, isUser = false) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${isUser ? 'user' : 'assistant'}`;
        msgDiv.innerHTML = `
            <div class="msg-bubble">
                ${text}
            </div>
        `;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    if (chatForm) {
        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = chatInput.value.trim();
            if (!text) return;

            appendMessage(text, true);
            chatInput.value = '';

            setTimeout(() => {
                const estelaReply = getEstelaResponse(text);
                appendMessage(estelaReply, false);
            }, 600);
        });
    }

    if (suggestionsContainer) {
        suggestionsContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.btn-suggestion');
            if (btn) {
                const question = btn.getAttribute('data-question');
                appendMessage(question, true);

                setTimeout(() => {
                    const estelaReply = getEstelaResponse(question);
                    appendMessage(estelaReply, false);
                }, 500);
            }
        });
    }
}

// --- BOLETINS DE OCORRÊNCIA REGISTRADOS & CODE AUTO-GENERATORS ---

// Mock registered reports data
let initialBoletins = [
    {
        id: 1,
        code: 'DOC-2026-001',
        date: '2026-06-10',
        curso: 'Costura Industrial A',
        professor: 'Prof. Carlos',
        material: 'Réguas de 60cm',
        tipo: 'Ferramenta',
        planoCodigo: 'PLAN-501',
        origem: 'Lab 1',
        descricao: 'Durante o traçado do molde base, duas réguas foram encontradas com trincas severas na escala centimétrica, inviabilizando medições precisas.',
        situacao: 'Material danificado',
        qtdPrevista: '30',
        qtdEncontrada: '28',
        qtdDiferenca: '2',
        aluno: 'Grupo de modelagem da noite',
        observacoes: 'Material substituído temporariamente por réguas sobressalentes do Lab 2.',
        medidas: 'Orientação aos alunos, Registro em controle',
        status: 'Registrado'
    }
];

let registeredBoletins = JSON.parse(localStorage.getItem('registeredBoletins')) || initialBoletins;
if (!localStorage.getItem('registeredBoletins')) {
    localStorage.setItem('registeredBoletins', JSON.stringify(initialBoletins));
}

// Generate next DOC-2026-XXX code
function setupNextBoletimCode() {
    const inputCode = document.getElementById('boletim-codigo');
    if (inputCode) {
        const nextNum = registeredBoletins.length + 1;
        inputCode.value = `DOC-2026-${String(nextNum).padStart(3, '0')}`;
    }
}

// Generate next PLAN-XXX code
function setupNextPlanoCode() {
    const inputCode = document.getElementById('plano-codigo-input');
    if (inputCode) {
        const nextNum = 500 + lessonPlans.length + 1;
        inputCode.value = `PLAN-${nextNum}`;
    }
}

// Render the grid of registered reports
function renderRegisteredBoletins() {
    const container = document.getElementById('boletins-grid-container');
    if (!container) return;
    container.innerHTML = '';

    if (registeredBoletins.length === 0) {
        container.innerHTML = `<div style="text-align:center; grid-column: 1/-1; padding:40px; color:var(--text-muted);">Nenhum boletim registrado encontrado.</div>`;
        return;
    }

    const sorted = [...registeredBoletins].reverse();

    sorted.forEach(b => {
        const card = document.createElement('div');
        card.className = 'boletim-card-file';
        card.innerHTML = `
            <h3 class="boletim-card-title">${b.code}</h3>
            <div class="boletim-card-meta">Data: <strong>${b.date}</strong></div>
            <div class="boletim-card-meta">Professor: <strong>${b.professor}</strong></div>
            <div class="boletim-card-meta">Curso/Turma: <strong>${b.curso}</strong></div>
            <div class="boletim-card-meta">Material: <strong>${b.material} (Qtd: ${b.qtdDiferenca})</strong></div>
            <div class="boletim-card-status">
                <span class="status-tag">${b.status}</span>
                <button class="btn-view-boletim" onclick="openBoletimDetailsModal(${b.id})">Visualizar</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Open registered reports details modal
function openBoletimDetailsModal(id) {
    const b = registeredBoletins.find(item => item.id === id);
    if (!b) return;

    document.getElementById('view-boletim-doc-code').textContent = `BOLETIM DE OCORRÊNCIA – COD: ${b.code}`;
    document.getElementById('view-boletim-data').textContent = b.date;
    document.getElementById('view-boletim-origem').textContent = b.origem;
    document.getElementById('view-boletim-curso').textContent = b.curso;
    document.getElementById('view-boletim-professor').textContent = b.professor;
    document.getElementById('view-boletim-material').textContent = b.material;
    document.getElementById('view-boletim-tipo').textContent = b.tipo;
    document.getElementById('view-boletim-plano-cód').textContent = b.planoCodigo;
    document.getElementById('view-boletim-descricao').textContent = b.descricao;
    document.getElementById('view-boletim-situacao').textContent = b.situacao;
    document.getElementById('view-boletim-prevista').textContent = b.qtdPrevista;
    document.getElementById('view-boletim-encontrada').textContent = b.qtdEncontrada;
    document.getElementById('view-boletim-diferenca').textContent = b.qtdDiferenca;
    document.getElementById('view-boletim-aluno').textContent = b.aluno;
    document.getElementById('view-boletim-observacoes').textContent = b.observacoes;
    document.getElementById('view-boletim-medidas').textContent = b.medidas;

    document.getElementById('modal-view-boletim').classList.add('active');
}
