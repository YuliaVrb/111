// Импорт библиотек
const WalletConnectProvider = window.WalletConnectProvider.default;
const Web3 = window.Web3;
const QRCode = window.QRCode;

// Инициализация провайдера WalletConnect с использованием QuickNode URL
const provider = new WalletConnectProvider({
    rpc: {
        1: "wss://indulgent-tame-tent.quiknode.pro/5cd1af4dfcc02c64e7efc39360c0efdd2cfefac4/"
    },
    bridge: "https://bridge.walletconnect.org" // Явно указываем bridge URL
});

// Создание экземпляра Web3
const web3 = new Web3(provider);

// Функция для логирования ошибок
const logError = (error) => {
    console.error('Произошла ошибка:', error);
    // Дополнительно можно отправить ошибку на сервер для анализа
    // fetch('/log-error', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ error: error.message })
    // });
};

// Подключение кошелька
const connectWallet = async () => {
    try {
        // Подключение провайдера
        await provider.enable();
        
        // Генерация URI для WalletConnect
        const uri = provider.connector.uri;

        // Создание и отображение QR-кода
        const qrCodeDiv = document.getElementById('qrcode');
        qrCodeDiv.innerHTML = '';
        QRCode.toCanvas(qrCodeDiv, uri, function (error) {
            if (error) console.error('Ошибка генерации QR-кода:', error);
        });

        // Получение аккаунтов
        const accounts = await web3.eth.getAccounts();
        console.log('Подключен к кошельку:', accounts[0]);
        alert(`Подключен к кошельку: ${accounts[0]}`);

        // Получение баланса
        const balance = await web3.eth.getBalance(accounts[0]);
        console.log(`Баланс: ${web3.utils.fromWei(balance, 'ether')} ETH`);

    } catch (error) {
        logError(error);
        alert('Ошибка подключения к кошельку');
    }
};

// Обработчик нажатия кнопки подключения кошелька
document.getElementById('connect-wallet').addEventListener('click', connectWallet);

// Обработка отключения
provider.on("disconnect", (code, reason) => {
    console.log('Wallet disconnected', code, reason);
});
