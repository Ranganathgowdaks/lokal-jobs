import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  Animated,
  View,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addBookmark, removeBookmark } from "../redux/bookmarksSlice";
import JobCard from "../components/JobCard";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Empty from "../components/Empty";
import { fetchJobs } from "../utils/api";

export default function JobsScreen({ navigation }) {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const flatListRef = useRef(null);
  const scrollY = useRef(new Animated.Value(0)).current;

  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmarks);

  useEffect(() => {
    const loadInitialJobs = async () => {
      try {
        const data = await fetchJobs(1);
        if (Array.isArray(data)) {
          setJobs(data);
          setError(null);
          setPage(2);
          if (data.length < 10) setHasMore(false);
        } else {
          throw new Error("Unexpected API response format");
        }
      } catch (err) {
        console.error("Error fetching jobs:", err.message);
        setError("Failed to load jobs");
      } finally {
        setLoading(false);
      }
    };

    loadInitialJobs();
  }, []);

  const loadMoreJobs = async () => {
    if (loadingMore || !hasMore) return;

    setLoadingMore(true);
    try {
      const nextData = await fetchJobs(page);
      if (Array.isArray(nextData) && nextData.length > 0) {
        setJobs((prev) => [...prev, ...nextData]);
        setPage((prev) => prev + 1);
        if (nextData.length < 10) setHasMore(false);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.error("Error fetching more jobs:", err.message);
    } finally {
      setLoadingMore(false);
    }
  };

  const isBookmarked = (id) => bookmarks.some((job) => job.id === id);

  const handleBookmark = (job) => {
    if (isBookmarked(job.id)) {
      dispatch(removeBookmark(job.id));
    } else {
      dispatch(addBookmark(job));
    }
  };

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setShowScrollTop(offsetY > 400); // show after 400px
  };

  const scrollToTop = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ offset: 0, animated: true });
    }
  };

  if (loading) return <Loader />;
  if (error) return <Error message={error} />;
  if (jobs.length === 0) return <Empty message="No jobs found." />;

  return (
    <>
      <FlatList
        ref={flatListRef}
        data={jobs}
        keyExtractor={(item, index) =>
          item.id ? item.id.toString() : index.toString()
        }
        renderItem={({ item }) => (
          <JobCard
            job={item}
            isBookmarked={isBookmarked(item.id)}
            onPress={() => navigation.navigate("JobDetail", { job: item })}
            onBookmark={() => handleBookmark(item)}
          />
        )}
        contentContainerStyle={{ paddingVertical: 8 }}
        onEndReached={loadMoreJobs}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loadingMore ? <Loader /> : null}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />

      {showScrollTop && (
        <TouchableOpacity style={styles.scrollTopButton} onPress={scrollToTop}>
          <Ionicons name="arrow-up" size={24} color="#fff" />
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  scrollTopButton: {
    position: "absolute",
    bottom: 24,
    right: 16,
    backgroundColor: "#333",
    padding: 12,
    borderRadius: 30,
    elevation: 5,
    zIndex: 100,
  },
});
