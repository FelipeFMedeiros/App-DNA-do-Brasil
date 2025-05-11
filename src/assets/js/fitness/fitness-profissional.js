/*! Fitness profissional.js | Busca de Especialistas | Adminuiux 2023-2025 */

'use strict';

document.addEventListener('DOMContentLoaded', function () {
    // Elementos de busca e filtro
    const searchInput = document.getElementById('searchInput');
    const specialtyFilter = document.getElementById('specialtyFilter');
    const filterChips = document.querySelectorAll('.filter-chip');
    const resultCount = document.getElementById('resultCount');
    const specialistCards = document.querySelectorAll('.specialist-card');

    // Elementos para o modal de agendamento
    const bookModal = document.getElementById('bookModal');
    const confirmBookingBtn = document.getElementById('confirmBooking');

    // Filtrar especialistas
    function filterSpecialists() {
        const searchTerm = searchInput.value.toLowerCase();
        const specialty = specialtyFilter.value;

        let visibleCount = 0;

        specialistCards.forEach((card) => {
            const cardText = card.textContent.toLowerCase();
            const cardSpecialty = card.dataset.specialty;

            // Verificar se o card corresponde aos filtros
            const matchesSearch = searchTerm === '' || cardText.includes(searchTerm);
            const matchesSpecialty = specialty === '' || cardSpecialty === specialty;

            // Mostrar ou esconder o card com base nos filtros
            if (matchesSearch && matchesSpecialty) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Atualizar contador de resultados
        resultCount.textContent = visibleCount;
    }

    // Event listeners para os elementos de filtro
    searchInput.addEventListener('input', filterSpecialists);
    specialtyFilter.addEventListener('change', filterSpecialists);

    // Event listener para chips de filtro
    filterChips.forEach((chip) => {
        chip.addEventListener('click', function () {
            // Remover a classe 'active' de todos os chips
            filterChips.forEach((c) => c.classList.remove('active'));

            // Adicionar a classe 'active' ao chip clicado
            this.classList.add('active');

            // Atualizar o filtro de especialidade
            const filter = this.dataset.filter;
            specialtyFilter.value = filter === 'todos' ? '' : filter;

            // Aplicar os filtros
            filterSpecialists();
        });
    });

    // Configurar o modal de agendamento
    document.querySelectorAll('[data-bs-target="#bookModal"]').forEach((button) => {
        button.addEventListener('click', function () {
            // Obter informações do especialista selecionado
            const card = this.closest('.specialist-card');
            const specialistName = card.querySelector('h6').textContent;
            const specialistImg = card.querySelector('img').src;
            const specialistSpecialty = card.querySelector('.badge').textContent;

            // Atualizar o modal com as informações do especialista
            document.getElementById('selectedSpecialistName').textContent = specialistName;
            document.getElementById('selectedSpecialistImg').querySelector('img').src = specialistImg;
            document.getElementById('selectedSpecialistSpecialty').textContent = specialistSpecialty;

            // Definir data mínima como hoje
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('appointmentDate').min = today;
        });
    });

    // Confirmar agendamento
    confirmBookingBtn.addEventListener('click', function () {
        const appointmentDate = document.getElementById('appointmentDate').value;
        const appointmentTime = document.getElementById('appointmentTime').value;

        // Validação simples
        if (!appointmentDate || !appointmentTime) {
            alert('Por favor, selecione data e horário para a consulta.');
            return;
        }

        // Fechar modal de agendamento
        const bsBookModal = bootstrap.Modal.getInstance(bookModal);
        bsBookModal.hide();

        // Mostrar modal de confirmação
        setTimeout(() => {
            const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
            confirmationModal.show();
        }, 500);
    });

    // Adicionar mais especialistas (exemplo para uma implementação real)
    function loadMoreSpecialists() {
        // Em um cenário real, isso faria uma requisição AJAX para carregar mais especialistas
        console.log('Carregar mais especialistas');
    }

    // Inicializar tooltips do Bootstrap (se necessário)
    if (typeof bootstrap !== 'undefined') {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
});
