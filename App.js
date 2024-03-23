import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const coursesData = [
  {
    id: 1,
    name: "Fashion & Apparel Design",
    description:
      "Fashion design is the applied art dedicated to the design of apparel and lifestyle accessories...",
    image: require("./assets/fashion.jpg"),
  },
  {
    id: 2,
    name: "Graphic Design",
    description:
      "Is about creating visual content to communicate messages to the masses.Graphic Design courses are used to create visual content using elements such as photographs, colours etc.",
    image: require("./assets/graphic_design.jpg"),
  },
  {
    id: 3,
    name: "Course Software Engineering",
    description:
      "Deals with the design, development, testing, and maintenance of software applications.",
    image: require("./assets/software_engineering.jpg"),
  },
  {
    id: 4,
    name: "Business Infor Technology",
    description:
      "The focus of the course is on how technology is used in and by businesses and organizations.",
    image: require("./assets/business_IT.jpg"),
  },
  {
    id: 5,
    name: "Hospitality",
    description:
      "where you will learn all about hospitality, culinary arts, catering, events, human resources, marketing, sales, and finance.During this two-year course...",
    image: require("./assets/hospitality.jpg"),
  },
  {
    id: 6,
    name: "Architecture",
    description:
      "It provides understanding and application of visual communication in art-line, shapes form, colour, texture, proportion, light and shade, etc.",
    image: require("./assets/architecture.jpg"),
  },
];

const CourseItem = ({ course, onRate }) => {
  const [rating, setRating] = useState(0);

  const handleRate = () => {
    if (rating < 6) {
      const newRating = rating + 1;
      setRating(newRating);
      onRate(course.id, newRating);
    }
  };

  return (
    <View style={styles.courseContainer}>
      <Image source={course.image} style={styles.courseImage} />
      <Text style={styles.courseName}>{course.name}</Text>
      <Text style={styles.courseDescription}>{course.description}</Text>
      <TouchableOpacity onPress={handleRate}>
        <FontAwesome name="star" size={20} color="gold" />
      </TouchableOpacity>
      <Text style={styles.ratingText}>Rating: {rating}</Text>
    </View>
  );
};

const App = () => {
  const [courses, setCourses] = useState(coursesData);

  const handleRateCourse = (courseId, newRating) => {
    const updatedCourses = courses.map((course) => {
      if (course.id === courseId) {
        return { ...course, rating: newRating };
      }
      return course;
    });
    setCourses(updatedCourses);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {courses.map((course) => (
          <CourseItem
            key={course.id}
            course={course}
            onRate={handleRateCourse}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollViewContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingVertical: 10,
  },
  courseContainer: {
    margin: 10,
    width: 150,
  },
  courseImage: {
    width: "100%",
    height: 100,
  },
  courseName: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 5,
  },
  courseDescription: {
    fontSize: 8,
  },
  rateButton: {
    color: "blue",
    textDecorationLine: "underline",
    marginTop: 5,
  },
  ratingText: {
    marginTop: 5,
  },
});

export default App;
