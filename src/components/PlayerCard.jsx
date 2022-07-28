import '../styles/playerCard.css'

export default function PlayerCard() {
    return (
        <button className="staff">
          <div className="role">
            <img alt="" src="https://img.finalfantasyxiv.com/lds/h/Z/W5a6yeRyN2eYiaV-AGU7mJKEhs.png" />
            guildRole
          </div>
          <div className="img">
            <img alt="" src="https://img2.finalfantasyxiv.com/f/e1499f5fe2c833b5070cb4effb5e2680_8106f857613f8fb994b0be37b26ff4bafc0_96x96.jpg?1659030406" />
          </div>
          <div className="name">
            <p>firstName</p>
            <p>lastName</p>
          </div>
        </button>
    )
}