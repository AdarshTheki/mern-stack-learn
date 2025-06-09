import { config } from '../constant';
import { Client, ID, Databases, Storage, Query } from 'appwrite';

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client.setEndpoint(config.appWriteUrl).setProject(config.appWriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            );
        } catch (error) {
            console.log('Appwrite serive :: createPost :: error', error);
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            );
        } catch (error) {
            console.log('Appwrite serive :: updatePost :: error', error);
        }
    }

    async deletePost(slug) {
        try {
            return await this.databases.deleteDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug
            );
        } catch (error) {
            console.log('Appwrite serive :: deletePost :: error', error);
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug
            );
        } catch (error) {
            console.log('Appwrite serive :: getPost :: error', error);
        }
    }

    async getPosts(queries = [Query.equal('status', 'active')]) {
        try {
            return await this.databases.listDocuments(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                queries
            );
        } catch (error) {
            console.log('Appwrite serive :: getPosts :: error', error);
        }
    }

    // file upload service

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(config.appWriteBucketId, ID.unique(), file);
        } catch (error) {
            console.log('Appwrite serive :: uploadFile :: error', error);
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(config.appWriteBucketId, fileId);
        } catch (error) {
            console.log('Appwrite serive :: deleteFile :: error', error);
        }
    }

    getFilePreview(fileId) {
        try {
            return this.bucket.getFilePreview(config.appWriteBucketId, fileId);
        } catch (error) {
            console.log('Appwrite serive :: getFilePreview :: error', error);
        }
    }
}

export const Services = new Service();
