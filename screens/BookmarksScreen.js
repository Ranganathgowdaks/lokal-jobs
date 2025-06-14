import React from "react";
import { FlatList, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { removeBookmark } from "../redux/bookmarksSlice";
import JobCard from "../components/JobCard";
import Empty from "../components/Empty";

export default function BookmarksScreen({ navigation }) {
  const bookmarks = useSelector((state) => state.bookmarks);
  const dispatch = useDispatch();

  if (bookmarks.length === 0) return <Empty message="No bookmarked jobs." />;

  return (
    <FlatList
      data={bookmarks}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <JobCard
          job={item}
          isBookmarked={true}
          onPress={() => navigation.navigate("JobDetail", { job: item })}
          onBookmark={() => dispatch(removeBookmark(item.id))}
        />
      )}
    />
  );
}
