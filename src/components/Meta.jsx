/**
 * One quiet line of facts about an entry, optionally opened by the brand's point.
 * Each separator belongs to the fact after it and is clipped at the start of a line,
 * so a wrapped row never begins or ends with a stray dot.
 */
export default function Meta({ items, point = false, className = '' }) {
    const visible = items.filter(Boolean);
    if (!visible.length) return null;
    return (
        <div className={('meta meta-list ' + className).trim()}>
            <div className="meta-row">
                {visible.map((item, index) => (
                    <span className="meta-item" key={index}>
                        {point && index === 0 ? <span className="point" aria-hidden="true" /> : null}
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}
