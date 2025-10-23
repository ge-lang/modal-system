# 🎨 Advanced Modal System

A flexible, accessible modal dialog system with multiple types, animations, and interactive features built with modern CSS and JavaScript.

![Modal System](https://via.placeholder.com/800x400/34495e/ffffff?text=Modal+System)

## ✨ Features

- **Multiple Modal Types** - Alert, confirm, prompt, custom
- **Smooth Animations** - CSS transitions and transforms
- **Accessibility** - ARIA labels, keyboard navigation
- **Flexible Content** - Support for forms, media, etc.
- **Stackable Modals** - Multiple modal support
- **Event Handling** - Lifecycle events and callbacks
- **Responsive Design** - Mobile-optimized modals
- **Themeable** - CSS custom properties

## 🚀 Live Demo

[View Live Demo](https://ge-lang.github.io/modal-system)

## 🛠️ Technologies Used

- **HTML5** - Dialog element semantics
- **CSS3** - Animations, backdrop-filter, variables
- **JavaScript** - Class-based implementation

## 📦 Installation

```bash
git clone https://github.com/ge-lang/modal-system.git
cd modal-system
```

🔧 Basic Usage

```javascript
// Create modal instance
const modal = new Modal({
    title: 'Confirm Action',
    content: 'Are you sure?',
    type: 'confirm',
    buttons: [
        { text: 'Cancel', action: 'close' },
        { text: 'Confirm', action: 'confirm' }
    ]
});

// Show modal
modal.open();

// Handle events
modal.on('confirm', () => {
    console.log('Action confirmed!');
});
```

🎯 Modal Types

· Alert - Information messages
· Confirm - Yes/No decisions
· Prompt - User input
· Loading - Progress indicators
· Custom - Fully customizable

♿ Accessibility Features

· Focus Management - Trap focus within modal
· Keyboard Navigation - ESC to close, Enter to confirm
· Screen Reader Support - ARIA attributes
· Color Contrast - WCAG compliant

🤝 Contributing

Please see CONTRIBUTING.md for guidelines.

📄 License

MIT Licensed
