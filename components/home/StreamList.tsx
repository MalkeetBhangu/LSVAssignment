import React, { useCallback } from 'react'
import { View, StyleSheet, FlatList, ListRenderItem } from 'react-native'
import StreamCardItem, { StreamItem } from './StreamCardItem'
import { getHeight, getWidth } from 'libs/StyleHelper'
import { useGetStreams } from 'apis/useGetStreams'
import colors from '@tokens/Colors'



export interface StreamListProps {
    streams?: StreamItem[]
    onPressItem?: (item: StreamItem) => void
    onPressFollow?: (item: StreamItem) => void
}

const StreamList: React.FC<StreamListProps> = ({ onPressItem, onPressFollow }) => {
    const { data: apiStreams } = useGetStreams()

    const keyExtractor = useCallback((item: StreamItem) => item.id, [])

    const renderItem: ListRenderItem<StreamItem> = useCallback(({ item }) => (
        <StreamCardItem item={item} onPressItem={onPressItem} onPressFollow={onPressFollow} />
    ), [onPressItem, onPressFollow])

    return (
        <View style={styles.container}>
            <FlatList
                data={apiStreams}
                numColumns={2}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
                columnWrapperStyle={styles.columnWrapper}
                initialNumToRender={2}
                maxToRenderPerBatch={8}
                windowSize={5}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: getHeight(5)
    },
    listContent: {
        paddingHorizontal: getWidth(10),
        paddingBottom: getHeight(120),
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
})

export default StreamList
