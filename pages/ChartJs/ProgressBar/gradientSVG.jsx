function GradientSVG() {
    const idCSS = "hello";
    const gradientTransform = `rotate(80)`;
    return (
        <svg style={{ height: 0 }}>
            <defs>
                <linearGradient id={idCSS} gradientTransform={gradientTransform}>
                    <stop offset="10.29%" stopColor="#c9c9c9" />
                    <stop offset="85.56%" stopColor="#00ff04" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export default GradientSVG;
