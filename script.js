// スクロールアニメーション
const fadeIns = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    { threshold: 0.1 }
);

fadeIns.forEach((fadeIn) => observer.observe(fadeIn));

// 将来の機能追加用（例: 動的コンテンツのロード、API統合）
export function init() {
    console.log('C.F||Client Fox website initialized');
    // ここに追加の初期化ロジックを記述
}

// 初期化
init();
