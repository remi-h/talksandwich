export default function Skeleton() {
    return (
        <div className="skeleton">
            <div className="s-content"></div>

            <style jsx>{`
                .skeleton {
                    width: 400px;
                }
                .skeleton > div {
                    background: #c2bdae;
                    border-radius: 4px;
                }
                .s-content {
                    padding: 50px 0;
                }
            `}</style>
        </div>
    )
}