import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./JobCard.styles";

export default function JobCard({ job, onPress, onBookmark, isBookmarked }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {/* Header: Logo, Title + Bookmark */}
      <View style={styles.header}>
        <View style={styles.imageTitleContainer}>
          {job.creatives?.[0]?.image ? (
            <Image
              source={{ uri: job.creatives[0].image }}
              style={styles.logo}
            />
          ) : (
            <View style={[styles.logo, styles.logoFallback]}>
              <Ionicons name="briefcase-outline" size={24} color="#aaa" />
            </View>
          )}
          <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {job.title}
            </Text>
            <Text style={styles.salary}>
              ₹{job.salary_min} - ₹{job.salary_max}
            </Text>
          </View>
        </View>

        <TouchableOpacity onPress={onBookmark}>
          <Ionicons
            name={isBookmarked ? "bookmark" : "bookmark-outline"}
            size={24}
            color="#007bff"
          />
        </TouchableOpacity>
      </View>

      {/* Company and Location */}
      <Text style={styles.company}>{job.company || "Company Name"}</Text>
      <Text style={styles.location}>
        📍 {job.primary_details?.Place || "Location"}
      </Text>

      {/* Badges */}
      <View style={styles.badges}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            {job.openings_count || "Multiple"} Vacancies
          </Text>
        </View>
        {job.job_type === 77 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Work From Home</Text>
          </View>
        )}
      </View>

      {/* Actions */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.chatBtn}>
          <Ionicons name="logo-whatsapp" size={18} color="white" />
          <Text style={styles.btnText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.callBtn}>
          <Ionicons name="call" size={18} color="white" />
          <Text style={styles.btnText}>Call HR</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
