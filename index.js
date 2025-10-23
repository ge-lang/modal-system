class ModalSystem {
            constructor() {
                this.modals = {
                    default: document.getElementById('defaultModal'),
                    success: document.getElementById('successModal'),
                    warning: document.getElementById('warningModal'),
                    error: document.getElementById('errorModal'),
                    'auto-close': document.getElementById('autoCloseModal')
                };
                
                this.init();
            }

            init() {
                // Add event listeners to trigger buttons
                document.querySelectorAll('.trigger-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const modalType = e.target.dataset.modal;
                        this.openModal(modalType);
                    });
                });

                // Timed modal example
                document.getElementById('timedModal').addEventListener('click', () => {
                    setTimeout(() => {
                        this.openModal('success');
                    }, 3000);
                });

                // Add close functionality to all modals
                Object.values(this.modals).forEach(modal => {
                    if (modal) {
                        // Close on overlay click
                        modal.addEventListener('click', (e) => {
                            if (e.target === modal) {
                                this.closeModal(modal);
                            }
                        });

                        // Close on close button click
                        const closeBtn = modal.querySelector('.close-btn');
                        if (closeBtn) {
                            closeBtn.addEventListener('click', () => this.closeModal(modal));
                        }

                        // Close on cancel button click
                        const cancelBtn = modal.querySelector('.cancel-btn');
                        if (cancelBtn) {
                            cancelBtn.addEventListener('click', () => this.closeModal(modal));
                        }

                        // Action on confirm button click
                        const confirmBtn = modal.querySelector('.confirm-btn');
                        if (confirmBtn) {
                            confirmBtn.addEventListener('click', () => {
                                alert('Action confirmed!');
                                this.closeModal(modal);
                            });
                        }
                    }
                });

                // Close on ESC key
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape') {
                        this.closeAllModals();
                    }
                });
            }

            openModal(modalType) {
                const modal = this.modals[modalType];
                if (!modal) return;

                this.closeAllModals();
                
                modal.classList.add('active');
                modal.querySelector('.modal')?.classList.add('active');

                // Auto-close functionality
                if (modalType === 'auto-close') {
                    setTimeout(() => {
                        this.closeModal(modal);
                    }, 3000);
                }
            }

            closeModal(modal) {
                modal.classList.remove('active');
                modal.querySelector('.modal')?.classList.remove('active');
            }

            closeAllModals() {
                Object.values(this.modals).forEach(modal => {
                    if (modal) {
                        this.closeModal(modal);
                    }
                });
            }
        }

        // Initialize the modal system when page loads
        document.addEventListener('DOMContentLoaded', () => {
            new ModalSystem();
        });
