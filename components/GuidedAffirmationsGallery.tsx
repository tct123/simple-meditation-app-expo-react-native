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
            <View style={styles.listContainer}>
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
                />
            </View>
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
    listContainer: {
        gap: 8, // Entspricht `space-y-2` für horizontale FlatList
    },
    productContainer: {
        height: 144, // h-36 = 144px
        width: 128,  // w-32 = 128px
        borderRadius: 6, // rounded-md = 6px
        marginRight: 16, // mr-4 = 16px
    },
    productImage: {
        width: '100%',
        height: '100%',
    },
});

export default GuidedAffirmationsGallery;
