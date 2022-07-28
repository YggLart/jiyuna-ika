export default function Footer() {
    const todayDate = new Date();
    return (
        <section className="footer">
            Jiyuna Ika © {todayDate.getFullYear()}
        </section>
    )
}