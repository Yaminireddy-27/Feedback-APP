import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isEmojiClicked: false,
  }

  onClickEmoji = () => {
    this.setState({isEmojiClicked: true})
  }

  renderFeedQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="emojis-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-list">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                type="button"
                className="button"
                onClick={this.onClickEmoji}
              >
                <img src={emoji.imageUrl} alt={emoji.name} className="emoji" />
                <br />
                <span className="emoji-name">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYouPage = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="emojis-container">
        <img src={loveEmojiUrl} alt="love emoji" className="emoji" />
        <h1 className="heading">Thank You</h1>
        <p className="thankyou-description">
          We will use your Feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isEmojiClicked} = this.state

    return (
      <div className="bg-container">
        {isEmojiClicked ? this.renderThankYouPage() : this.renderFeedQuestion()}
      </div>
    )
  }
}

export default Feedback
