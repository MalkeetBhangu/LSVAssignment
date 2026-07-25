import { useQuery } from '@tanstack/react-query'
import { CountryItem } from '@components/home/CountryFilterList'
import { QUERY_KEYS } from './ApiConstants'

export const DEFAULT_COUNTRIES: CountryItem[] = [
    { id: 'global', name: 'Global', flag: '🌐' },
    { id: 'india', name: 'India', flag: '🇮🇳' },
    { id: 'philippines', name: 'Philippines', flag: '🇵🇭' },
    { id: 'brazil', name: 'Brazil', flag: '🇧🇷' },
    { id: 'vietnam', name: 'Vietnam', flag: '🇻🇳' },
    { id: 'indonesia', name: 'Indonesia', flag: '🇮🇩' },
    { id: 'mexico', name: 'Mexico', flag: '🇲🇽' },
]

// Mock API endpoint fetch function (ready for backend URL replacement)
export const fetchCountriesApi = async (): Promise<CountryItem[]> => {
    // Replace with backend endpoint when available:
    // const response = await fetch('https://api.example.com/countries')
    // return response.json()
    return new Promise(resolve => {
        resolve(DEFAULT_COUNTRIES)
    })
}

export const useGetCountries = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.COUNTRIES],
        queryFn: fetchCountriesApi,
        staleTime: 1000 * 60 * 60,
    })
}
