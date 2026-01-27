import { useTranslation } from 'react-i18next';

export const useLocalizedProduct = () => {
    const { i18n } = useTranslation();

    const getLocalizedProduct = (product) => {
        if (!product) return null;

        const lang = i18n.language; // 'en', 'es', 'az'

        // If language is English or default, return as is (assuming default is English)
        // However, if we want to be strict, we check lang.

        let name = product.name;
        let category = product.category;
        let tag = product.tag;

        if (lang === 'es') {
            name = product.name_es || product.name;
            category = product.category_es || product.category;
            tag = product.tag_es || product.tag;
        } else if (lang === 'az') {
            name = product.name_az || product.name;
            category = product.category_az || product.category;
            tag = product.tag_az || product.tag;
        }
        // 'en' usually falls back to the default fields which seem to be English in db.json

        return {
            ...product,
            name,
            category,
            tag
        };
    };

    const getLocalizedProducts = (products) => {
        if (!Array.isArray(products)) return [];
        return products.map(getLocalizedProduct);
    };

    return { getLocalizedProduct, getLocalizedProducts };
};
