function GradientSVG() {
    const idCSS = "hello";
    const gradientTransform = `rotate(80)`;
    return (
        <svg style={{ height: 0 }}>
            <defs>
                <linearGradient id={idCSS} gradientTransform={gradientTransform}>
                    <stop offset="0.29%" stopColor="#EBECF2" />
                    <stop offset="50.56%" stopColor="#00ff04" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export default GradientSVG;
