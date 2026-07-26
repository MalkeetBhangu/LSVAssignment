import { useQuery } from '@tanstack/react-query'
import { StreamItem } from '@components/home/StreamCardItem'
import { QUERY_KEYS } from './ApiConstants'

const DUMMY_STREAMS: StreamItem[] = Array.from({ length: 20 }, (_, i) => {
    const images = [
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    ]
    const avatars = [
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80',
    ]
    const names = ['Sofia Chen', 'Elena Rost', 'Aria Tanaka', 'Mia Santos', 'Chloe Vance']
    const flags = ['🇵🇭', '🇮🇳', '🇧🇷', '🇻🇳', '🇲🇽']

    return {
        id: `stream_${i + 1}`,
        name: names[i % names.length],
        viewers: `${(8.2 + (i % 5) * 0.4).toFixed(1)}K`,
        flag: flags[i % flags.length],
        avatar: avatars[i % avatars.length],
        image: images[i % images.length],
    }
})

// Mock API endpoint fetch function (ready for backend URL replacement)
export const fetchStreamsApi = async (): Promise<StreamItem[]> => {
    // Replace with backend endpoint when available:
    // const response = await fetch('https://api.example.com/streams')
    // return response.json()
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(DUMMY_STREAMS)
        }, 300)
    })
}

export const useGetStreams = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.STREAMS],
        queryFn: fetchStreamsApi,
        staleTime: 1000 * 60 * 5,
    })
}
