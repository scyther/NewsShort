import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import BookmarkItem from '../components/BookmarkItem';
import EmptyBookmark from '../components/EmptyBookmark';

const Bookmarks = () => {
  const [data, setData] = useState([1, 2, 3]);
  const renderItem = ({item}) => {
    return <BookmarkItem item={item} />;
  };
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        ListEmptyComponent={<EmptyBookmark />}
        extraData={data}
      />
    </View>
  );
};

export default Bookmarks;
