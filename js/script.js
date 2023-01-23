class SoundPlayer {
  constructor() {
    this.keys = Array.from(document.querySelectorAll('.notes__note'));
  }
  init() {
    this.keys.forEach(key => key.addEventListener('transitionend', (e) => this.removeTransition(e)));
    window.addEventListener('keydown', (e) => this.playSound(e));
  }
  removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }
  playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }
}
const soundPlayer = new SoundPlayer();
soundPlayer.init();