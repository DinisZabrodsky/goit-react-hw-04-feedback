

export function FeedbackOptions ({options, onLeaveFeedback}) {
    return options.map(el => (<button key={el} data-name={el} type="button" onClick={onLeaveFeedback}>{el}</button>
        ))
}
        