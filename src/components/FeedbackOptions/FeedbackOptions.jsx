import PropTypes from 'prop-types'

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return(
      options.map(option => {
        return (
        <button
          type='button'
          onClick={() => onLeaveFeedback(option)}
          key = {option}
          >
            {option}
        </button>
    )
  })
)}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
}