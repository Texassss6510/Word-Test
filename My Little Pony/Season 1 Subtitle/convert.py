import re
import sys
import os

def extract_dialogue(input_file, output_file):
    """
    读取 SRT 字幕文件，提取对话文本（去除时间戳和序号），并保存到输出文件中。
    """
    with open(input_file, "r", encoding="utf-8") as f:
        lines = f.readlines()

    dialogue_lines = []
    # 匹配时间戳的正则表达式
    timestamp_pattern = re.compile(r"\d{2}:\d{2}:\d{2},\d{3}\s*-->\s*\d{2}:\d{2}:\d{2},\d{3}")

    for line in lines:
        line = line.strip()
        if not line:
            continue
        # 跳过纯数字行（序号行）
        if line.isdigit():
            continue
        # 跳过时间戳行
        if timestamp_pattern.match(line):
            continue
        # 剩余的就是对话内容
        dialogue_lines.append(line)

    # 将提取出的对话按行连接
    dialogue_text = "\n".join(dialogue_lines)

    with open(output_file, "w", encoding="utf-8") as f:
        f.write(dialogue_text)

    print(f"转换完成！对话文本已写入文件：{output_file}")

if __name__ == "__main__":
    # 如果脚本通过拖拽方式运行，sys.argv[1]将包含文件路径
    if len(sys.argv) < 2:
        print("请将 SRT 文件拖入本程序！")
        input("按回车键退出...")
        sys.exit(1)

    input_filepath = sys.argv[1]
    if not os.path.isfile(input_filepath):
        print("无法找到指定的文件！")
        sys.exit(1)

    # 生成输出文件路径（将原文件扩展名替换为 .txt）
    base, _ = os.path.splitext(input_filepath)
    output_filepath = base + ".txt"

    extract_dialogue(input_filepath, output_filepath)
    input("按回车键退出...")
