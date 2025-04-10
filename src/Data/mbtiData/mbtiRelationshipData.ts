export const MBTIRelationships: Record<string, { 
    friendship: { description: string, details: string };
    love: { description: string, details: string };
    parenting: { description: string, details: string };
  }> = {
    ISTJ: {
      friendship: {
        description: 'ISTJ là những người bạn đáng tin cậy và có thể dựa vào. Họ giữ lời hứa và hỗ trợ bạn bè một cách nghiêm túc.',
        details: 'Trong tình bạn, ISTJ không bao giờ lơ là trách nhiệm. Họ luôn có mặt khi cần, nhưng có thể thiếu sự bày tỏ cảm xúc một cách lãng mạn.'
      },
      love: {
        description: 'Trong tình yêu, ISTJ là những người rất chung thủy và kiên định, nhưng đôi khi có thể thiếu sự lãng mạn.',
        details: 'ISTJ sẽ rất yêu thương người mình chọn, nhưng họ có thể gặp khó khăn trong việc thể hiện tình cảm sâu sắc bằng hành động cụ thể.'
      },
      parenting: {
        description: 'Làm cha mẹ, ISTJ rất nghiêm khắc nhưng luôn đảm bảo con cái có một môi trường ổn định và có kỷ luật.',
        details: 'ISTJ tạo ra một không gian an toàn cho con cái, khuyến khích sự phát triển và tổ chức trong cuộc sống của trẻ.'
      }
    },
    ISFJ: {
      friendship: {
        description: 'ISFJ trong tình bạn là người rất tận tâm và sẵn sàng lắng nghe. Họ luôn tìm cách giúp đỡ bạn bè của mình.',
        details: 'ISFJ có khả năng chăm sóc người khác và cung cấp sự hỗ trợ trong mọi hoàn cảnh. Họ là những người bạn đáng tin cậy và chu đáo.'
      },
      love: {
        description: 'Trong tình yêu, ISFJ là người rất chung thủy và tận tâm. Họ làm mọi thứ vì người mình yêu.',
        details: 'ISFJ có thể hy sinh nhiều điều vì người yêu, nhưng đôi khi họ có thể cảm thấy tổn thương nếu tình cảm không được đền đáp xứng đáng.'
      },
      parenting: {
        description: 'Làm cha mẹ, ISFJ là người cha mẹ chăm sóc và yêu thương con cái một cách sâu sắc.',
        details: 'Họ dạy con cái sự quan tâm, chăm sóc và tôn trọng người khác, tạo ra một môi trường gia đình đầy tình yêu thương.'
      }
    },
    INFJ: {
      friendship: {
        description: 'INFJ trong tình bạn là người bạn đáng tin cậy, luôn có mặt khi bạn cần và luôn sẵn sàng lắng nghe.',
        details: 'INFJ thích những tình bạn sâu sắc và có ý nghĩa. Họ sẽ dành nhiều thời gian để hiểu bạn bè mình một cách thấu đáo.'
      },
      love: {
        description: 'Trong tình yêu, INFJ là người rất tình cảm và tận tụy, luôn tìm kiếm sự kết nối tâm hồn.',
        details: 'INFJ yêu rất sâu sắc và tìm kiếm một đối tác có thể chia sẻ cùng lý tưởng và mối liên kết tâm hồn mạnh mẽ.'
      },
      parenting: {
        description: 'Làm cha mẹ, INFJ khuyến khích sự sáng tạo và phát triển tinh thần cho con cái.',
        details: 'Họ rất quan tâm đến sự phát triển nội tâm của con cái và sẽ tìm cách giúp con họ phát huy tối đa tiềm năng của mình.'
      }
    },
    INTJ: {
      friendship: {
        description: 'INTJ có thể khá kín đáo trong tình bạn, nhưng họ là người bạn tuyệt vời khi cần sự giúp đỡ từ họ.',
        details: 'INTJ sẽ luôn sẵn sàng chia sẻ quan điểm và giúp đỡ bạn bè trong những quyết định quan trọng.'
      },
      love: {
        description: 'Trong tình yêu, INTJ là người rất kiên định và yêu người mình yêu hết lòng, nhưng thiếu sự lãng mạn.',
        details: 'Họ cần một đối tác có thể hiểu và chia sẻ lý tưởng cũng như cuộc sống của họ một cách sâu sắc.'
      },
      parenting: {
        description: 'Làm cha mẹ, INTJ là những người rất lý trí và có kế hoạch, muốn con cái phát triển một cách độc lập.',
        details: 'Họ mong muốn con cái có thể tự lập và suy nghĩ độc lập, vì vậy họ sẽ cung cấp một môi trường học hỏi tự do cho trẻ.'
      }
    },
    ISTP: {
      friendship: {
        description: 'ISTP có xu hướng rút lui vào thế giới riêng khi cảm thấy quá tải, nhưng họ luôn là những người bạn đáng tin cậy.',
        details: 'Họ có thể không phải là người bày tỏ cảm xúc một cách rõ ràng, nhưng trong tình bạn, họ sẽ luôn hỗ trợ khi cần.'
      },
      love: {
        description: 'ISTP có thể ít bày tỏ cảm xúc nhưng họ rất yêu thương và kiên định trong tình yêu.',
        details: 'ISTP là những người có thể không nói nhiều về cảm xúc, nhưng sẽ luôn ở bên khi đối tác cần.'
      },
      parenting: {
        description: 'Làm cha mẹ, ISTP sẽ khuyến khích sự độc lập và tự do cho con cái.',
        details: 'Họ sẽ cho con cái tự do khám phá và tìm hiểu thế giới, nhưng vẫn duy trì sự hướng dẫn khi cần thiết.'
      }
    },
    ISFP: {
      friendship: {
        description: 'ISFP là người bạn dễ gần, thân thiện và luôn lắng nghe những người xung quanh.',
        details: 'Họ có thể không nói nhiều, nhưng họ luôn sẵn sàng giúp đỡ bạn bè khi cần, và có thể là người bạn tốt nhất trong lúc khó khăn.'
      },
      love: {
        description: 'Trong tình yêu, ISFP là người rất lãng mạn và tận tâm, nhưng cũng có thể thiếu sự ổn định.',
        details: 'Họ yêu một cách tự nhiên và chân thành, nhưng đôi khi thiếu kiên nhẫn trong mối quan hệ dài hạn.'
      },
      parenting: {
        description: 'Làm cha mẹ, ISFP rất yêu thương và chăm sóc con cái.',
        details: 'Họ khuyến khích con cái thể hiện bản thân và theo đuổi những gì chúng yêu thích, với sự quan tâm và tôn trọng.'
      }
    },
    INFP: {
      friendship: {
        description: 'INFP là người bạn tuyệt vời, luôn sẵn sàng lắng nghe và hỗ trợ bạn bè.',
        details: 'Họ không chỉ là người bạn thân thiết mà còn là người bạn chia sẻ cảm xúc sâu sắc.'
      },
      love: {
        description: 'Trong tình yêu, INFP yêu rất nồng nhiệt và tận tâm, luôn tìm kiếm một tình yêu lý tưởng.',
        details: 'INFP có thể cực kỳ lý tưởng hóa tình yêu, và đôi khi dễ dàng cảm thấy thất vọng nếu tình yêu không như mong đợi.'
      },
      parenting: {
        description: 'Làm cha mẹ, INFP là người cha mẹ nhạy cảm và đầy tình yêu.',
        details: 'Họ sẽ luôn khuyến khích sự sáng tạo và độc lập cho con cái, với một sự quan tâm sâu sắc đến cảm xúc và nhu cầu của chúng.'
      }
    },
    INTP: {
      friendship: {
        description: 'INTP là người bạn thông minh và suy nghĩ sâu sắc, nhưng có thể khá lạnh lùng trong mối quan hệ.',
        details: 'Họ thích giao tiếp thông qua lý luận và quan điểm, nhưng đôi khi thiếu sự quan tâm tới cảm xúc của bạn bè.'
      },
      love: {
        description: 'Trong tình yêu, INTP là người lý trí và nghiêm túc, tìm kiếm một đối tác có thể chia sẻ những cuộc trò chuyện sâu sắc.',
        details: 'INTP yêu cầu sự tôn trọng về mặt trí tuệ và có thể cảm thấy không thoải mái trong những mối quan hệ lãng mạn quá nặng về cảm xúc.'
      },
      parenting: {
        description: 'Làm cha mẹ, INTP khuyến khích sự độc lập và phát triển tư duy cho con cái.',
        details: 'Họ sẽ tạo ra một môi trường học tập sáng tạo và tự do cho con cái, khuyến khích con cái suy nghĩ và phát triển tự lập.'
      }
    },
    ESTP: {
      friendship: {
        description: 'ESTP là người bạn năng động, luôn tạo ra những cuộc phiêu lưu và thú vị cho bạn bè.',
        details: 'Họ thích sự hành động và sẵn sàng tham gia vào mọi thử thách, điều này khiến họ trở thành người bạn lý tưởng trong những tình huống thú vị.'
      },
      love: {
        description: 'Trong tình yêu, ESTP là người nhiệt huyết và sôi nổi, yêu thích cảm giác phấn khích và những trải nghiệm mới.',
        details: 'ESTP có thể thiếu sự ổn định trong mối quan hệ lâu dài, nhưng họ là những người bạn đồng hành thú vị và đầy nhiệt huyết.'
      },
      parenting: {
        description: 'Làm cha mẹ, ESTP là người cha mẹ năng động và yêu thích hành động.',
        details: 'Họ sẽ khuyến khích con cái tham gia vào các hoạt động ngoài trời và khám phá thế giới xung quanh.'
      }
    },
    ESFP: {
      friendship: {
        description: 'ESFP là người bạn sáng tạo và dễ gần, luôn mang lại niềm vui và sự lạc quan.',
        details: 'Họ thích kết nối với mọi người và luôn sẵn sàng chia sẻ sự vui vẻ, nhưng đôi khi thiếu kiên nhẫn với những vấn đề phức tạp.'
      },
      love: {
        description: 'Trong tình yêu, ESFP là người lãng mạn và tận hưởng khoảnh khắc.',
        details: 'ESFP yêu một cách nồng nhiệt và sống hết mình trong các mối quan hệ, nhưng họ có thể thiếu sự kiên nhẫn với những mối quan hệ dài lâu.'
      },
      parenting: {
        description: 'Làm cha mẹ, ESFP là người cha mẹ vui vẻ và tận tụy.',
        details: 'Họ khuyến khích con cái thể hiện bản thân và tham gia vào các hoạt động sáng tạo, với một tâm hồn luôn đầy niềm vui.'
      }
    },
    ENFP: {
      friendship: {
        description: 'ENFP là người bạn nhiệt huyết và luôn tìm kiếm những kết nối sâu sắc.',
        details: 'Họ là người luôn sẵn sàng giúp đỡ bạn bè và tạo ra những mối quan hệ ý nghĩa và tràn đầy cảm hứng.'
      },
      love: {
        description: 'Trong tình yêu, ENFP yêu một cách đam mê và luôn tìm kiếm sự kết nối tâm hồn.',
        details: 'ENFP là người yêu nhiệt tình và sáng tạo, nhưng đôi khi họ có thể cảm thấy bối rối trong các mối quan hệ lâu dài.'
      },
      parenting: {
        description: 'Làm cha mẹ, ENFP là người cha mẹ sáng tạo và có tầm nhìn.',
        details: 'Họ sẽ khuyến khích con cái theo đuổi đam mê và tự do sáng tạo, nhưng đôi khi có thể thiếu sự kỷ luật cần thiết.'
      }
    },
    ENTP: {
      friendship: {
        description: 'ENTP là người bạn thông minh và thích tranh luận, luôn có những ý tưởng sáng tạo để chia sẻ.',
        details: 'Họ thích thách thức bạn bè với những câu hỏi sâu sắc và luôn sẵn sàng tham gia vào những cuộc trò chuyện thú vị.'
      },
      love: {
        description: 'Trong tình yêu, ENTP thích những mối quan hệ thú vị và kích thích trí tuệ.',
        details: 'Họ yêu những cuộc trò chuyện sâu sắc và tìm kiếm một đối tác có thể thách thức họ về mặt trí tuệ.'
      },
      parenting: {
        description: 'Làm cha mẹ, ENTP sẽ dạy con cái tư duy sáng tạo và khả năng phân tích.',
        details: 'Họ sẽ khuyến khích con cái nghĩ khác biệt và phát triển kỹ năng giải quyết vấn đề, nhưng có thể thiếu sự kiên nhẫn trong việc theo dõi tiến trình của con cái.'
      }
    },
    ESTJ: {
      friendship: {
        description: 'ESTJ là người bạn trung thành và đáng tin cậy, luôn tuân thủ các quy tắc và thực hiện trách nhiệm.',
        details: 'Họ luôn có mặt khi cần thiết và sẽ hỗ trợ bạn bè trong mọi tình huống, đặc biệt trong việc tổ chức và lên kế hoạch.'
      },
      love: {
        description: 'Trong tình yêu, ESTJ yêu một cách kiên định và có tổ chức.',
        details: 'Họ tìm kiếm sự ổn định và chắc chắn trong mối quan hệ, nhưng đôi khi có thể thiếu sự lãng mạn.'
      },
      parenting: {
        description: 'Làm cha mẹ, ESTJ là người cha mẹ nghiêm khắc và có kế hoạch.',
        details: 'Họ khuyến khích con cái theo đuổi các mục tiêu cụ thể và thành công trong cuộc sống, nhưng có thể thiếu sự linh hoạt trong việc nuôi dạy.'
      }
    },
    ESFJ: {
      friendship: {
        description: 'ESFJ là người bạn tận tụy và rất quan tâm đến cảm xúc của bạn bè.',
        details: 'Họ luôn cố gắng làm cho mọi người cảm thấy thoải mái và luôn tìm cách duy trì hòa khí trong mối quan hệ.'
      },
      love: {
        description: 'Trong tình yêu, ESFJ rất lãng mạn và tận tụy.',
        details: 'Họ làm mọi thứ vì người mình yêu, nhưng đôi khi có thể hy sinh quá nhiều cho đối tác.'
      },
      parenting: {
        description: 'Làm cha mẹ, ESFJ là người cha mẹ chăm sóc và yêu thương.',
        details: 'Họ tạo ra một môi trường gia đình đầy tình yêu thương và luôn đảm bảo con cái cảm thấy được yêu thương và quan tâm.'
      }
    },
    ENFJ: {
      friendship: {
        description: 'ENFJ là người bạn đầy cảm hứng và tận tâm.',
        details: 'Họ luôn giúp đỡ bạn bè phát triển và đạt được những mục tiêu lớn trong cuộc sống, luôn là người dẫn dắt trong các mối quan hệ.'
      },
      love: {
        description: 'Trong tình yêu, ENFJ yêu rất sâu sắc và tận tâm.',
        details: 'Họ tìm kiếm một đối tác có thể phát triển cùng họ và chia sẻ những giá trị và lý tưởng chung.'
      },
      parenting: {
        description: 'Làm cha mẹ, ENFJ là người cha mẹ nhiệt huyết và chăm sóc.',
        details: 'Họ sẽ tạo ra một môi trường phát triển đầy tình yêu và giúp con cái phát triển các kỹ năng giao tiếp và xã hội.'
      }
    },
    ENTJ: {
      friendship: {
        description: 'ENTJ là người bạn lãnh đạo và có tầm nhìn xa.',
        details: 'Họ sẽ thách thức bạn bè để đạt được mục tiêu cao hơn và luôn sẵn sàng hỗ trợ trong các quyết định lớn.'
      },
      love: {
        description: 'Trong tình yêu, ENTJ yêu một cách kiên định và chiến lược.',
        details: 'Họ tìm kiếm sự ổn định và rõ ràng trong mối quan hệ, nhưng có thể thiếu sự mềm mại trong cảm xúc.'
      },
      parenting: {
        description: 'Làm cha mẹ, ENTJ rất nghiêm khắc và có kế hoạch.',
        details: 'Họ khuyến khích con cái có mục tiêu rõ ràng và làm việc chăm chỉ để đạt được chúng, nhưng có thể thiếu sự linh hoạt trong cách dạy con cái.'
      }
    }
  };
  