.cta-button {
  position: relative;
  overflow: hidden;
}

.ripple {
  position: absolute;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  transform: scale(0);
  animation: rippleEffect 0.6s linear;
}

@keyframes rippleEffect {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
