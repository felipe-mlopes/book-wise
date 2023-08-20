import { useDeferredValue } from "react";
import { useQuery } from "@tanstack/react-query";

import { useFilter } from "./use-filter";
import { GroupedRatingsProps, UserRatingsProps } from "@/@types/user-logged-ratings";

interface RatingsProfileFetchResponse {
  ratings: UserRatingsProps[]
}

const fetcher = (): Promise<RatingsProfileFetchResponse> =>
  fetch('/api/user-logged/ratings', {
    method: 'GET'
  }).then(res => res.json())


export function useGetUserRatings() {
  const { search } = useFilter()
  const searchDeferred = useDeferredValue(search)
  const { data, isLoading } = useQuery({
    queryFn: fetcher,
    queryKey: ['ratings']
  })

  const userRatings = data?.ratings
  const filteredUserRatings = userRatings?.filter(ratings => ratings.bookName.toLowerCase().includes(searchDeferred.toLowerCase()) ||
    ratings.bookAuthor.toLowerCase().includes(searchDeferred.toLowerCase()))

  const groupedRatings = filteredUserRatings?.reduce((groups: GroupedRatingsProps[], rating: UserRatingsProps) => {
    const existingGroup = groups.find((group) => group.createdAt === rating.createdAt);

    if (existingGroup) {
      existingGroup.ratings.push(rating);
    } else {
      groups.push({ createdAt: rating.createdAt, ratings: [rating] });
    }

    return groups;
  }, [] as GroupedRatingsProps[]);


  return {
    groupedRatings,
    isLoading
  }
}