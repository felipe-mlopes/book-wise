export function splitRatingsDescription(content: string, maxWords: number) {
  const wordsArray = content.split(' ')

  const firstWords = wordsArray.slice(0, maxWords).join(' ') + '... '
  const restWords = wordsArray.slice(maxWords, content.length).join(' ')

  return {
    shortRatingDescription: firstWords,
    restRatingDescription: restWords
  }
}