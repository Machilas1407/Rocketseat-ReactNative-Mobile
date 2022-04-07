import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, StatusBar, FlatList } from 'react-native';

import api from './services/api';

export default function App() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data)
        })
    }, [])
    return (
        <>
            <StatusBar barStyle='light-content' backgroundColor='#7158c1' />
            <SafeAreaView style={styles.container}>
                <FlatList

                    data={projects}
                    keyExtractor={project => project.id}
                    renderItem={({ item: project }) => (
                        <Text style={styles.project}>{project.title}</Text>
                    )}
                />
            </SafeAreaView>

            {/* <View style={styles.container}>
                {projects.map(project => (
                    <Text style={styles.project} key={project.key}>{project.title}</Text>)
                )}
            </View> */}
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
    },
    project: {
        color: '#FFF',
        fontSize: 30,
    }

})