const hollandAdvices: Record<string, { title: string; description: string }[]> = {
  R: [
    {
      title: 'Ưu tiên nghề thực hành',
      description: 'Bạn học tốt thông qua trải nghiệm trực tiếp. Những công việc yêu cầu vận dụng tay nghề như sửa chữa, cơ khí, xây dựng sẽ giúp bạn cảm thấy rõ ràng về giá trị bản thân và thành quả lao động.'
    },
    {
      title: 'Tránh xa môi trường quá lý thuyết',
      description: 'Bạn không phù hợp với việc ngồi hàng giờ để phân tích hay viết báo cáo. Hãy chọn công việc cho phép bạn di chuyển, hoạt động, và tiếp xúc với công cụ, máy móc.'
    },
    {
      title: 'Khám phá học nghề',
      description: 'Nếu đại học không phải lựa chọn ưu tiên, bạn hoàn toàn có thể chọn con đường học nghề. Những kỹ năng bạn học được sẽ hữu ích ngay trong thực tế và đem lại sự ổn định sớm.'
    }
  ],
  I: [
    {
      title: 'Theo đuổi tri thức chuyên sâu',
      description: 'Bạn có khả năng đào sâu vấn đề và tư duy hệ thống. Hãy chọn ngành học có nền tảng học thuật mạnh như khoa học tự nhiên, công nghệ hoặc y sinh.'
    },
    {
      title: 'Tham gia nghiên cứu',
      description: 'Bạn phù hợp với các trung tâm nghiên cứu, phòng thí nghiệm hoặc công việc đòi hỏi phân tích số liệu, viết báo cáo chuyên sâu. Đó là nơi bạn phát triển mạnh nhất.'
    },
    {
      title: 'Rèn luyện kỹ năng giao tiếp học thuật',
      description: 'Dù không phải người hướng ngoại, nhưng khả năng trình bày, viết lách, trao đổi chuyên môn sẽ giúp bạn tiến xa trong môi trường học thuật và chuyên nghiệp.'
    }
  ],
  A: [
    {
      title: 'Khơi dậy tiềm năng sáng tạo',
      description: 'Hãy theo đuổi những lĩnh vực như mỹ thuật, âm nhạc, văn học, thiết kế... nơi bạn được thể hiện bản thân một cách tự do và chân thật.'
    },
    {
      title: 'Tìm không gian cá nhân',
      description: 'Bạn làm việc tốt nhất khi không bị ràng buộc. Hãy tìm môi trường cởi mở, ít quy tắc cứng nhắc để khai phóng cảm hứng sáng tạo trong bạn.'
    },
    {
      title: 'Biến đam mê thành sự nghiệp',
      description: 'Đừng nghĩ nghệ thuật là điều không thực tế. Khi bạn nghiêm túc với đam mê và rèn luyện kỹ năng chuyên sâu, bạn hoàn toàn có thể sống được với nghề.'
    }
  ],
  S: [
    {
      title: 'Phát triển trong môi trường giúp đỡ người khác',
      description: 'Bạn giàu lòng nhân ái. Nghề như giáo viên, điều dưỡng, bác sĩ tâm lý sẽ giúp bạn cảm thấy công việc mình làm có ý nghĩa sâu sắc với xã hội.'
    },
    {
      title: 'Tăng cường kỹ năng tự bảo vệ cảm xúc',
      description: 'Bạn thường đặt cảm xúc người khác lên trên mình. Hãy học cách nói "không" đúng lúc và xây dựng giới hạn lành mạnh trong các mối quan hệ công việc.'
    },
    {
      title: 'Tham gia cộng đồng',
      description: 'Các hoạt động tình nguyện, hội nhóm xã hội sẽ giúp bạn vừa phát triển kỹ năng giao tiếp, vừa làm việc gắn với giá trị sống của bạn.'
    }
  ],
  E: [
    {
      title: 'Tận dụng khả năng lãnh đạo',
      description: 'Bạn sinh ra để dẫn dắt và thuyết phục người khác. Hãy chọn những vị trí đòi hỏi năng lực quản lý, xây dựng đội nhóm hoặc đưa ra quyết định.'
    },
    {
      title: 'Chọn môi trường cạnh tranh tích cực',
      description: 'Bạn thích thử thách và khao khát vươn lên. Hãy tham gia vào môi trường có nhịp độ nhanh, định hướng mục tiêu rõ ràng để bạn cảm thấy mình đang tiến bộ.'
    },
    {
      title: 'Phát triển kỹ năng ảnh hưởng xã hội',
      description: 'Ngành marketing, truyền thông hoặc ngoại giao sẽ giúp bạn lan tỏa quan điểm, ảnh hưởng tích cực đến người khác và xây dựng thương hiệu cá nhân.'
    }
  ],
  C: [
    {
      title: 'Tìm kiếm sự ổn định và tổ chức',
      description: 'Bạn làm việc tốt khi có quy trình rõ ràng, nội dung công việc được sắp xếp bài bản. Những nơi như cơ quan nhà nước, tài chính – kế toán sẽ rất phù hợp.'
    },
    {
      title: 'Đầu tư vào kỹ năng công nghệ và dữ liệu',
      description: 'Bạn có khả năng kiểm soát chi tiết tốt. Hãy học thêm các phần mềm văn phòng, hệ thống quản lý dữ liệu để nâng cao hiệu suất làm việc.'
    },
    {
      title: 'Làm việc trong môi trường chuyên nghiệp',
      description: 'Sự nghiêm túc, đúng giờ và cẩn thận của bạn sẽ được đánh giá cao nếu làm việc trong tổ chức tôn trọng kỷ luật và chất lượng.'
    }
  ]
};

export default hollandAdvices;
