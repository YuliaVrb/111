import re

# Функция для комментирования строк, содержащих определенные ключевые слова
def comment_protection_lines(file_path, keywords):
    with open(file_path, 'r', encoding='utf-8') as file:
        lines = file.readlines()

    with open(file_path, 'w', encoding='utf-8') as file:
        for line in lines:
            if any(keyword in line for keyword in keywords):
                file.write('// ' + line)  # Комментируем строку
            else:
                file.write(line)

# Ключевые слова для поиска защитных механизмов
keywords = ['document.referrer', 'window.location', 'eval', 'alert', 'hostname', 'Access Denied']

# Пути к файлам
file_paths = ['9193.ed26e04f.js', 'main.22627240.js']

# Обработка каждого файла
for file_path in file_paths:
    comment_protection_lines(file_path, keywords)

print("Защитные механизмы закомментированы.")
