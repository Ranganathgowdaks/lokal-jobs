import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./JobDetailScreen.styles";

export default function JobDetailScreen({ route }) {
  const { job } = route.params;
  const details = job.primary_details || {};

  const handleCall = () => {
    if (job.phone) {
      Linking.openURL(`tel:${job.phone}`);
    }
  };

  const handleWhatsApp = () => {
    if (job.phone) {
      Linking.openURL(`https://wa.me/${job.phone}`);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        {/* Title */}
        <Text style={styles.title}>{job.title}</Text>

        {/* Badges */}
        <View style={styles.badgeContainer}>
          {job.openings_count && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                {job.openings_count} Vacancies
              </Text>
            </View>
          )}
          {job.job_type === 77 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Work From Home</Text>
            </View>
          )}
        </View>

        {/* Info Rows */}
        <View style={styles.row}>
          <Ionicons name="location-outline" size={18} color="#444" />
          <Text style={styles.label}>Location:</Text>
          <Text style={styles.value}>{details.Place || "N/A"}</Text>
        </View>

        <View style={styles.row}>
          <Ionicons name="cash-outline" size={18} color="#444" />
          <Text style={styles.label}>Salary:</Text>
          <Text style={styles.value}>
            ₹{job.salary_min} - ₹{job.salary_max}
          </Text>
        </View>

        <View style={styles.row}>
          <Ionicons name="call-outline" size={18} color="#444" />
          <Text style={styles.label}>Contact:</Text>
          <Text style={styles.value}>{job.phone || "Not Provided"}</Text>
        </View>

        <View style={styles.row}>
          <Ionicons name="briefcase-outline" size={18} color="#444" />
          <Text style={styles.label}>Experience:</Text>
          <Text style={styles.value}>{details.Experience || "N/A"}</Text>
        </View>

        <View style={styles.row}>
          <Ionicons name="school-outline" size={18} color="#444" />
          <Text style={styles.label}>Qualification:</Text>
          <Text style={styles.value}>{details.Qualification || "N/A"}</Text>
        </View>

        <View style={styles.row}>
          <Ionicons name="document-text-outline" size={18} color="#444" />
          <Text style={styles.label}>Job Type:</Text>
          <Text style={styles.value}>{details.Job_Type || "N/A"}</Text>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Description */}
        {job.content && (
          <>
            <Text style={styles.descriptionTitle}>📝 Job Description</Text>
            <Text style={styles.descriptionText}>{job.content}</Text>
          </>
        )}

        {/* Action Buttons */}
        {job.phone && (
          <View style={styles.actions}>
            <TouchableOpacity style={styles.chatBtn} onPress={handleWhatsApp}>
              <Ionicons name="logo-whatsapp" size={20} color="#fff" />
              <Text style={styles.btnText}>Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.callBtn} onPress={handleCall}>
              <Ionicons name="call" size={20} color="#fff" />
              <Text style={styles.btnText}>Call HR</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
