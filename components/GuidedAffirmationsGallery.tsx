import { Image, View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import images from "@/constants/affirmation-images";
import { GalleryPreviewData, Product } from "@/constants/models/Product";
import { Link } from "expo-router";

interface GuidedAffirmationsGalleryProps {
    title: string;
    products: GalleryPreviewData[];
}

const GuidedAffirmationsGallery = ({ title, products }: GuidedAffirmationsGalleryProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <FlatList
                data={products}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Link href={`/affirmations/${item.id}`} asChild>
                        <Pressable>
                            <View style={styles.productContainer}>
                                <Image
                                    source={item.image}
                                    resizeMode="cover"
                                    style={styles.productImage}
                                />
                                <Text>ProductGallery</Text>
                            </View>
                        </Pressable>
                    </Link>
                )}
                horizontal
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    titleContainer: {
        marginBottom: 8,
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    listContent: {
        gap: 8, // Abstand zwischen den Items
        paddingHorizontal: 0,
    },
    productContainer: {
        height: 144,
        width: 128,
        borderRadius: 6,
    },
    productImage: {
        width: '100%',
        height: '100%',
        borderRadius: 6,
    },
});

export default GuidedAffirmationsGallery;
