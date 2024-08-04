const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js', // Точка входа в приложение (обычно `index.js` или `index.tsx`)
    output: {
        path: path.resolve(__dirname, 'build'), // Папка для сборки
        filename: 'bundle.js' // Имя выходного файла
    },
    module: {
        rules: [
            // Правила для обработки разных типов файлов
            {
                test: /\.(js|jsx)$/, // Обработка JavaScript и JSX
                exclude: /node_modules/, // Исключить node_modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'] // Пресеты Babel для транспиляции
                    }
                },
            },
            {
                test: /\.css$/, // Обработка CSS
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/, // Обработка SCSS
                use: [
                    'style-loader', // Вставляет стили в HTML
                    'css-loader', // Преобразует CSS в модули
                    'sass-loader' // Преобразует SCSS в CSS
                ]
            },
            {
                test: /\.(ts|tsx)$/, // Обработка TypeScript и TSX
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader', // Используйте ts-loader для обработки TypeScript
                    options: {
                        configFile: 'tsconfig.json' // Укажите файл tsconfig.json
                    }
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html' // Шаблон для HTML-файла
        }),
        new CleanWebpackPlugin() // Очистка папки сборки перед каждой сборкой
    ],
    devServer: {
        contentBase: './build', // Папка для сервера разработки
        port: 3000 // Порт для сервера разработки
    },
};