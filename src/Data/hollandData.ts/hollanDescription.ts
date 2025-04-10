const hollandDescriptions: Record<
  string,
  {
    description: string;
    subtypes: { [key: string]: string };
  }
> = {
  R: {
    description: '🔧 Thực tế (Realistic): Nhóm người này có xu hướng yêu thích hành động cụ thể, kỹ thuật và các hoạt động đòi hỏi kỹ năng vận động, thể chất hoặc thao tác máy móc. Họ thường có hứng thú với các công việc mang tính thực hành, làm việc ngoài trời hoặc tương tác với các thiết bị, công cụ, hơn là những công việc văn phòng, trừu tượng. Họ thích nhìn thấy kết quả hữu hình của công việc mình làm và có xu hướng kiên định, thực tiễn và đáng tin cậy.',
    subtypes: {
      'Công nghệ – Kỹ thuật': 'Thích khám phá, vận hành và sửa chữa các thiết bị điện tử, cơ khí hoặc hệ thống máy móc. Họ thường phù hợp với nghề cơ khí, kỹ sư điện, kỹ thuật viên hoặc công nghệ sản xuất.',
      'Lao động tay chân': 'Ưa thích làm việc với công việc thể chất như xây dựng, lắp đặt, nông nghiệp hoặc vận chuyển. Họ đánh giá cao sức khỏe, sự bền bỉ và kết quả cụ thể từ công việc mình tạo ra.',
      'Công việc ngoài trời': 'Yêu thiên nhiên, thích sự di chuyển, tự do và các hoạt động ngoài trời như làm vườn, trồng trọt, khảo sát địa chất hoặc bảo vệ rừng.'
    }
  },
  I: {
    description: '🔬 Nghiên cứu (Investigative): Đây là những người có tư duy phân tích, yêu thích sự khám phá và đặt câu hỏi. Họ bị thu hút bởi các lĩnh vực cần tư duy logic, xử lý dữ liệu và giải quyết các vấn đề phức tạp. Nhóm này thường làm việc tốt trong môi trường độc lập, không bị ràng buộc bởi khuôn mẫu và thường không thích công việc quá thực tiễn hay phải giao tiếp nhiều.',
    subtypes: {
      'Khoa học tự nhiên': 'Đam mê nghiên cứu trong các lĩnh vực như sinh học, hóa học, vật lý hoặc môi trường. Họ thường làm việc trong phòng thí nghiệm, cơ sở nghiên cứu hoặc giảng dạy khoa học.',
      'Toán học và phân tích': 'Có khả năng xử lý con số, thuật toán, mô hình toán học, phù hợp với lĩnh vực tài chính, thống kê, kỹ sư dữ liệu hoặc trí tuệ nhân tạo.',
      'Nghiên cứu xã hội': 'Tò mò về hành vi con người và xã hội, thường theo đuổi ngành tâm lý học, xã hội học, nhân học, giáo dục hoặc phân tích chính sách.'
    }
  },
  A: {
    description: '🎨 Nghệ thuật (Artistic): Là nhóm người có óc sáng tạo mạnh mẽ, nhạy cảm với cái đẹp, màu sắc và biểu tượng. Họ đề cao tự do cá nhân và thường tránh xa các khuôn mẫu cố định. Người thuộc nhóm này thích thể hiện bản thân qua ngôn ngữ, hình ảnh, âm thanh hoặc chuyển động, đồng thời có khuynh hướng trực giác, linh hoạt và nhạy bén với cảm xúc.',
    subtypes: {
      'Thị giác – Thiết kế': 'Yêu cái đẹp và hình ảnh, có thể theo đuổi các nghề như họa sĩ, kiến trúc sư, thiết kế đồ họa, thiết kế nội thất, nhiếp ảnh hoặc quảng cáo sáng tạo.',
      'Biểu diễn – Âm nhạc': 'Đam mê sân khấu, âm nhạc, khiêu vũ hoặc điện ảnh. Họ thường là ca sĩ, diễn viên, nhạc công, đạo diễn hoặc nghệ sĩ biểu diễn.',
      'Viết lách – Ngôn ngữ': 'Thể hiện qua từ ngữ – nhà văn, nhà thơ, biên tập viên, biên kịch hoặc người sáng tạo nội dung, thích dùng ngôn từ để truyền cảm hứng.'
    }
  },
  S: {
    description: '🤝 Xã hội (Social): Những người này có xu hướng quan tâm đến người khác, thích tương tác, chăm sóc và hỗ trợ. Họ làm tốt trong môi trường có tính nhân văn cao, đề cao sự kết nối và giao tiếp. Họ thường kiên nhẫn, biết lắng nghe và có khả năng thấu hiểu cảm xúc của người khác.',
    subtypes: {
      'Giảng dạy – Giáo dục': 'Thích truyền đạt kiến thức, hướng dẫn người khác phát triển. Có thể là giáo viên, huấn luyện viên, cố vấn học tập hoặc giảng viên đại học.',
      'Y tế – Chăm sóc': 'Muốn giúp người khác thông qua các công việc chăm sóc sức khỏe như bác sĩ, y tá, điều dưỡng, tâm lý trị liệu, tư vấn viên hoặc công tác xã hội.',
      'Dịch vụ cộng đồng': 'Thích tham gia vào các hoạt động hỗ trợ xã hội như công tác thiện nguyện, dự án cộng đồng, bảo trợ xã hội hoặc hỗ trợ người yếu thế.'
    }
  },
  E: {
    description: '📢 Doanh nhân (Enterprising): Là những người chủ động, tự tin, thích lãnh đạo và chấp nhận thử thách. Họ thường có kỹ năng giao tiếp, đàm phán tốt và biết cách truyền cảm hứng cho người khác. Người thuộc nhóm này thích thuyết phục, dẫn dắt và xây dựng các chiến lược để đạt được mục tiêu lớn.',
    subtypes: {
      'Kinh doanh – Bán hàng': 'Thích thúc đẩy doanh số, đàm phán, kết nối với khách hàng và phát triển thương hiệu. Phù hợp với nghề sales, quản lý kinh doanh hoặc tiếp thị.',
      'Lãnh đạo – Quản lý': 'Thích dẫn dắt đội nhóm, tổ chức kế hoạch, quản lý chiến lược trong doanh nghiệp, tổ chức xã hội hoặc chính phủ.',
      'Khởi nghiệp – Đổi mới': 'Thích xây dựng ý tưởng mới, phát triển sản phẩm/dịch vụ sáng tạo, phù hợp với các nhà sáng lập, startup hoặc nhà đầu tư khởi nghiệp.'
    }
  },
  C: {
    description: '🗂️ Quy củ (Conventional): Người thuộc nhóm này rất có tổ chức, chi tiết, đáng tin cậy và thích làm việc theo quy trình rõ ràng. Họ giỏi làm việc với dữ liệu, bảng biểu và hệ thống thông tin. Nhóm này phù hợp với các vị trí hành chính, tài chính hoặc những công việc mang tính hỗ trợ quản lý, cần sự cẩn thận và chính xác.',
    subtypes: {
      'Văn phòng – Hành chính': 'Thích công việc hành chính như xử lý hồ sơ, sắp xếp văn bản, hỗ trợ bộ phận văn phòng. Có thể làm trợ lý, thư ký hoặc quản trị viên.',
      'Kế toán – Thống kê': 'Giỏi với con số và sự chính xác. Phù hợp với nghề kế toán, kiểm toán, phân tích dữ liệu, tài chính doanh nghiệp hoặc ngân hàng.',
      'Quản lý dữ liệu – Hệ thống': 'Thích xử lý thông tin, lưu trữ dữ liệu, làm việc với hệ thống ERP, CRM, quản lý văn thư hoặc thư viện số.'
    }
  }
};

export default hollandDescriptions;
