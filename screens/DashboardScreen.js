// DashboardScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';

const DashboardScreen = () => {
  // Dummy data for the line chart
  const performanceData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [50, 60, 70, 80, 90, 85, 75], // Example performance data
      },
    ],
  };

  // Dummy data for bar charts
  const chartData = {
    labels: ['Your Marks', 'Median Marks', 'Highest Marks'],
    datasets: [
      {
        data: [60, 65, 77], // Example data for Physics
      },
    ],
  };

  const chartDataChemistry = {
    labels: ['Your Marks', 'Median Marks', 'Highest Marks'],
    datasets: [
      {
        data: [78, 75, 85], // Example data for Chemistry
      },
    ],
  };

  const chartDataMath = {
    labels: ['Your Marks', 'Median Marks', 'Highest Marks'],
    datasets: [
      {
        data: [90, 85, 100], // Example data for Math
      },
    ],
  };

  // Dummy data for the pie chart
  const pieChartData = [
    {
      name: 'Physics',
      population: 30,
      color: '#FF6384',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Chemistry',
      population: 40,
      color: '#36A2EB',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Math',
      population: 30,
      color: '#FFCE56',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Dashboard</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Daily Class Participation Points</Text>
        <LineChart
          data={performanceData}
          width={320}
          height={220}
          chartConfig={chartConfig}
          bezier
          style={styles.chart}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Physics</Text>
        <BarChart
          data={chartData}
          width={320}
          height={170}
          chartConfig={barChartConfig}
          style={styles.chart}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Chemistry</Text>
        <BarChart
          data={chartDataChemistry}
          width={320}
          height={170}
          chartConfig={barChartConfig}
          style={styles.chart}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Math</Text>
        <BarChart
          data={chartDataMath}
          width={320}
          height={170}
          chartConfig={barChartConfig}
          style={styles.chart}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Subject Contribution in Midterm Exam</Text>
        <PieChart
          data={pieChartData}
          width={320}
          height={220}
          chartConfig={pieChartConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          style={styles.chart}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Attendance</Text>
        <Text style={styles.attendanceInfo}>Total Classes: 30</Text>
        <Text style={styles.attendanceInfo}>Classes Attended: 25</Text>
        <Text style={styles.attendanceInfo}>Attendance Rate: 83%</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Upcoming Deadlines</Text>
        <Text style={styles.deadline}>- Math Homework: Due 30th Aug</Text>
        <Text style={styles.deadline}>- Physics Lab Report: Due 2nd Sep</Text>
        <Text style={styles.deadline}>- Chemistry Project: Due 5th Sep</Text>
      </View>
    </ScrollView>
  );
};

// Line chart configuration
const chartConfig = {
  backgroundGradientFrom: '#3a477a',
  backgroundGradientTo: '#3a477a',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
  },
};

// Bar chart configuration
const barChartConfig = {
  backgroundGradientFrom: '#3a477a',
  backgroundGradientTo: '#3a477a',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
};

// Pie chart configuration
const pieChartConfig = {
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3a477a',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#3a477a',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3a477a',
    marginBottom: 10,
  },
  chart: {
    borderRadius: 8,
  },
  attendanceInfo: {
    fontSize: 16,
    color: '#3a477a',
    marginVertical: 5,
  },
  deadline: {
    fontSize: 16,
    color: '#3a477a',
    marginVertical: 5,
  },
});

export default DashboardScreen;
