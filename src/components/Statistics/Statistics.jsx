import React from 'react'

export function Statistics ({good, neutral, bad, total, positivePercentage}) {
    return <>
        <h2>Статистика</h2>
                    <div>
                        <p>Позитивні: {good}</p>
                        <p>Нейтральні: {neutral}</p>
                        <p>Негативні: {bad}</p>
                        <p>Відгуків загалом: {total}</p>
                        <p>Відсоток негативних відгуків {positivePercentage()}%</p>
                    </div>
    </>
}